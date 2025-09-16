 
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Grid, Typography, Box, FormControl, Autocomplete, TextField, MenuItem, Paper, Popper } from "@mui/material";
import PropTypes from "prop-types";
import { ArrowDropDown } from "@mui/icons-material";
import { Image } from "mui-image";
import JSZip from "jszip";
import queryString from "query-string";
import { sendNis2FileReport, setDefaultOrder, useNis2Questionnaire, useOrganizationNis2Questionnaires } from "../api/index.js"
import useGlobalState from "../use-global-state.js";

import theme from "../theme.js";
import { PrimaryBorderButton, ThirdBackgroundButton } from "./Buttons.jsx";
import { dayjs, useSnackbar, DATE_FORMAT, toBeCompressed } from "#utils";
import OnTheWayIcon from "../assets/images/on_the_way.png";
import Spinner from "./Spinner.jsx";
import QuestionnaireModal from "./QuestionnaireModal.jsx";
import questions from "../utils/questionnaire.js";

const styles = {
	container: {
		position: "absolute",
		top: "20%",
		right: "10%",
		backgroundColor: "#fff",
		borderRadius: "20px",
		padding: "20px 40px",
		width: "600px",
		margin: "50px auto",
		textAlign: "center",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
	},
	title: {
		color: theme.palette.primary.main,
		fontWeight: "bold",
		fontSize: "2rem",
	},
	subtitle: {
		color: theme.palette.primary.main,
		fontSize: "1.2rem",
	},
	text: {
		color: theme.palette.primary.main,
		fontSize: "1rem",
		textAlign: "left",
		textTransform: "none!important",
	},
	autoComplete: {
		width: "300px",
	},
	autoCompleteText: {
		'& .MuiInputBase-input': {
			color: theme.palette.primary.main, // Input text color
		},
		'& .MuiInputLabel-root': {
			color: theme.palette.primary.main, // Label color
		},
		'& .MuiOutlinedInput-root': {
			borderRadius: '20px',
			fontSize: '1rem',
			padding: '2px 20px',
			backgroundColor: 'transparent',
			'& fieldset': {
				border: `2px solid ${theme.palette.primary.main}`,
			},
		},
	},
	uploadButton: {
		width: "100%",
		height: "40px",
		display: "flex",
		alignItems: "center",
		textTransform: "none!important",
		backgroundColor: "transparent",
		color: theme.palette.primary.main,
		fontSize: "1rem",
		border: "0px",
		margin: "5px 0",
		cursor: "pointer",
		"&:hover": {
			borderColor: theme.palette.primary.dark,
		},
	},
	finalTitle: {
		color: theme.palette.secondary.main,
		fontStyle: "italic",
		fontSize: "1.8rem",
	},
	finalSubtitle: {
		color: theme.palette.primary.main,
		fontSize: "1.2rem",
	},
};

const zipAcceptedFormats = new Set(["application/zip", "application/x-zip-compressed"]);

const Nis2Window = ({ orders, isOrdersLoading, ordersMutate, selectedOrder, setSelectedOrder }) => {
	const { search } = useLocation();
	const { questionnaireId, software } = queryString.parse(search);
	const { success, error: snackError } = useSnackbar();
	const [isLoading, setIsLoading] = useState(false);
	const [currentStep, setCurrentStep] = useState(0);
	const [file, setFile] = useState(null);
	const [selectedQuestionnaire, setSelectedQuestionnaire] = useState({});
	const [fileError, setFileError] = useState(false);
	const [customSections, setCustomSections] = useState({ software: false, practices: true });
	const [tosAccepted, setTosAccepted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [open, setOpen] = useState(false);
	const [openQuestionnaireModal, setOpenQuestionnaireModal] = useState(false);
	const [currentQuestionnaireCategory, setCurrentQuestionnaireCategory] = useState(null);

	const { setOrganizationName, setQuestionnaireName } = useGlobalState(useCallback((e) => ({
		setOrganizationName: e.setOrganizationName,
		setQuestionnaireName: e.setQuestionnaireName,
	}), []));

	const navigate = useNavigate();

	const {questionnaire = {}, isError: isErrorQuestionnaire } = useNis2Questionnaire(questionnaireId);
	const {orgQuestionnaires = [], isLoading: isLoadingOrgQuestionnaires, isError: isErrorOrgQuestionnaires } = useOrganizationNis2Questionnaires(selectedOrder?.assignments?.organization);

	useEffect(() => {
		if (isErrorQuestionnaire || isErrorOrgQuestionnaires) snackError();
	}, [isErrorQuestionnaire, isErrorOrgQuestionnaires, snackError]);

	// handle the Upload Menu
	const anchorRef = useRef(null);
	const popperRef = useRef(null);
	const handleToggle = () => setOpen((prev) => !prev);
	const handleClose = () => setOpen(false);

	const handleFileChange = (event) => {
		setIsLoading(true);
		const uploadedFile = event.target.files;

		if (uploadedFile.length === 1 && zipAcceptedFormats.has(uploadedFile[0].type)) {
			setFile(uploadedFile[0]);
			setFileError(false);
			if (customSections?.practices) {
				setCurrentStep(3);
			}
		} else {
			const zip = new JSZip();
			const folderName = uploadedFile[0].webkitRelativePath.split("/")[0];

			for (const file of uploadedFile) {
				const relativePath = file.webkitRelativePath.replace(`${folderName}/`, "");
				if (relativePath.includes("node_modules") ||
					relativePath.includes("site-packages") ||
					relativePath.includes(".git") ||
					relativePath.includes("__pycache__") ||
					relativePath.includes(".generated.cs")
				) continue;
				if (!toBeCompressed(relativePath)) continue;
				zip.file(relativePath, file);
			}
			
			zip.generateAsync({ type: "blob" }).then((zippedFile) => {
				const zipFile = new File([zippedFile], folderName, { type: "application/zip" });
				setFile(zipFile);
				setFileError(false);
				if (customSections?.practices) {
					setCurrentStep(3);
				}
			}).catch((error) => {
				console.error("Error zipping files:", error);
				setFileError(true);
			});
		}

		event.target.value = "";
		setIsLoading(false);
	};

	const handleFileDelete = () => {
		setFile(null);
		setCurrentStep(3);
	};

	const handleQuestionnaireDelete = () => {
		setSelectedQuestionnaire({});
		setFile(null);
		setCurrentStep(2);
	};

	const handleSubmit = useCallback(async (order) => {
		setIsSubmitting(true);
		try {
			const finalSections = {
				sast: customSections?.software ?? false,
				vulnerabilities: customSections?.software ?? false,
				violations: customSections?.software ?? false,
				practices: customSections?.practices ?? false,
			};

			const formData = new FormData();
			formData.append("repository", file);
			formData.append("sections", JSON.stringify(finalSections));
			formData.append("order", JSON.stringify(order._id));
			formData.append("questionnaireId", JSON.stringify(selectedQuestionnaire._id))
			await sendNis2FileReport(formData);
			ordersMutate();
			success("The NIS2 Compliance report will be sent to your email once the analysis is completed.");
			setCurrentStep(4);
		} catch {
			snackError();
		}

		setIsSubmitting(false);
	}, [customSections?.practices, customSections?.software, file, ordersMutate, selectedQuestionnaire._id, snackError, success]);

	const handleHome = () => {
		setCurrentStep(0);
		setFile(null);
		setFileError(false);
		setCustomSections({ software: false, practices: true });
		setTosAccepted(false);
		setIsSubmitting(false);
		setCurrentQuestionnaireCategory(null);
	};

	const isUploadButtonDisabled = useMemo(() => {
		if (orders?.length > 0) {
			return false
		}

		return true
	}, [orders?.length]);

	// This is for closing the popper if the user clicks outside the popper
	useEffect(() => {
		const handleClickOutside = (event) => {
			const anchor = anchorRef.current;
			const popper = popperRef.current;

			if (anchor && popper && !anchor.contains(event.target) && !popper.contains(event.target)) {
				setOpen(false);
			}
		};

		if (open) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [open]);

	useEffect(() => {
		if (software) {
			setCustomSections(() => ({
				software: software === "true",
				practices: true,
			}));
		}
	}, [software]);

	// Set to current step 4 when redirected from Questionnaire page
	useEffect(() => {
		if (Object.keys(questionnaire).length > 0) {
			setCurrentStep(3);
			setSelectedQuestionnaire(questionnaire);
			// Remove the param from the URL
			const params = new URLSearchParams(location.search);
			params.delete('questionnaireId');
			params.delete('software');

			navigate({
				pathname: location.pathname,
				search: params.toString(),
			}, { replace: true });
		}
	}, [navigate, questionnaire]);

	useEffect(() => {
		if (Object.keys(selectedOrder ?? {}).length > 0 && currentStep === 0) {
			setCurrentStep(1);
		}
	}, [selectedOrder, currentStep]);

	useEffect(() => {
		if (currentStep === 3 && currentQuestionnaireCategory === null) {
			setCurrentQuestionnaireCategory(Object.keys(questions)[0]);
		}
	}, [currentStep, currentQuestionnaireCategory]);

	useEffect(() => {
		const mainPage = document.querySelector("#main-page");
		if (mainPage) {
			mainPage.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [currentStep, currentQuestionnaireCategory]);

	return ([
		<Box key="main-page" id="main-page" sx={styles.container}>
			<Typography sx={styles.title}>
				{"NIS2 Compliance Report"}
			</Typography>
			<Typography sx={styles.subtitle}>
				{"In-depth analysis fast & easy"}
			</Typography>
			{(orders?.length === 0 && !isOrdersLoading) && (
				<Typography sx={styles.error}>
					{"You don't have any active subscription with available NIS2 reports"}
				</Typography>
			)}
			{currentStep === 0
			&& (
				<Grid container direction="column" alignItems="center" spacing={2} mt={2}>
					{(orders?.length > 1 && Object.keys(selectedOrder ?? {}).length === 0) && (
						<Grid item width="100%">
							<Typography sx={styles.text}>{"Choose which organization you want to use"}</Typography>
							<FormControl fullWidth>
								<Autocomplete
									loading={isOrdersLoading}
									options={orders}
									getOptionLabel={(option) => {
										const count = option.subscription.services.nis2.remainingReports;
										return `${option.organizationName} (${count} ${count === 1 ? 'report' : 'reports'} remaining)`;
									}}
									renderInput={(params) => (
										<TextField
											{...params}
											label={"Select Organization"}
											InputProps={{
												...params.InputProps,
											}}
										/>
									)}
									onChange={async (_, value) => {
										setIsLoading(true);
										await setDefaultOrder(value._id);
										setSelectedOrder(value);
										setOrganizationName(value.organizationName);
										setIsLoading(false);
									}}
								/>
							</FormControl>
						</Grid>
					)}
				</Grid>
			)}
			{currentStep === 1
			&& (
				<Grid container direction="column" alignItems="center" spacing={2} mt={2}>
					<Grid item width="100%">
						{Object.keys(selectedOrder ?? {}).length > 0 && (
							<Grid container>
								<Typography sx={styles.text}>{"Selected organization"}</Typography>
								<Grid
									item
									width="100%"
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									
									sx={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}
								>
									<Typography sx={{ display: 'flex', alignItems: 'center' }}>
										<span>{selectedOrder.organizationName}</span>
										<span style={{ marginLeft: 8 }}>
										({selectedOrder?.subscription?.services?.nis2?.remainingReports} remaining)
										</span>
									</Typography>
									<PrimaryBorderButton
										title="Change Organization"
										width="auto"
										disabled={isSubmitting || orders.length === 1}
										onClick={() => {
											setSelectedOrder({});
											setFile(null);
											setCurrentStep(0);
										}}
									/>
								</Grid>
							</Grid>
						)}
						<Grid container mt={2}>
							<Typography sx={styles.text}>{"Select Analysis Sections"}</Typography>
							<Grid
								item
								width="100%"
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								mt={1}
							>
								{Object.keys(customSections).map((section) => (
									<Grid item key={section} display="flex" alignItems="center">
										<input
											disabled={section === "practices"}
											type="checkbox"
											className="custom-checkbox"
											checked={customSections[section]}
											onChange={() => setCustomSections({ ...customSections, [section]: !customSections[section] })}
										/>
										<Typography sx={{ marginLeft: 1 }}>{section.charAt(0).toUpperCase() + section.slice(1)}</Typography>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid container mt={2} mb={2}>
							<Grid
								item
								width="100%"
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<Grid item display="flex" alignItems="center">
									<input
										type="checkbox"
										className="custom-checkbox"
										disabled={isSubmitting}
										checked={tosAccepted}
										onChange={() => setTosAccepted(!tosAccepted)}
									/>
									<Typography sx={{ marginLeft: 1 }}>{"I have read and accepted the "}</Typography>
									<Link to="https://cyclopt.com/tos" target="_blank">
										<Typography sx={{ marginLeft: 0.5, textDecoration: "underline", color: theme.palette.primary.main }}>
											{"Terms of Service"}
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Grid>
						{(() => {
							const hasSelectedSections = Object.values(customSections).some(Boolean);
							const isDisabled = !tosAccepted || !hasSelectedSections;
							return (
								<ThirdBackgroundButton
									disabled={isDisabled || isSubmitting}
									title={"Continue"}
									onClick={() => setCurrentStep(2)}
								/>
							)
						})()}
					</Grid>
				</Grid>
			)}
			{currentStep === 2
			&& (
				<Grid container direction="column" alignItems="center" spacing={2} mt={2}>
					<Grid item width="100%">
						{Object.keys(selectedOrder ?? {}).length > 0 && (
							<Grid container>
								<Typography sx={styles.text}>{"Selected organization"}</Typography>
								<Grid
									item
									width="100%"
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									
									sx={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}
								>
									<Typography sx={{ marginRight: 2 }}>{`${selectedOrder.organizationName}`}</Typography>
									<PrimaryBorderButton
										title="Change Organization"
										width="auto"
										disabled={isSubmitting || orders.length === 1}
										onClick={() => {
											setSelectedOrder({});
											setFile(null);
											setCurrentStep(0);
										}}
									/>
								</Grid>
							</Grid>
						)}
						<Grid item width="100%" display="flex" alignItems="center" direction="column" marginTop="2rem">
							<ThirdBackgroundButton
								width="auto"
								disabled={isSubmitting}
								title="Create new Questionnaire"
								onClick={() => setOpenQuestionnaireModal(true)}
							/>
						</Grid>
						<Grid item width="100%" display="flex" alignItems="center" direction="column" marginTop="1rem">
							<Autocomplete
								loading={isLoadingOrgQuestionnaires}
								options={orgQuestionnaires}
								renderOption={(props, option) => (
									<li
										{...props}
										key={option._id}
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "flex-start",
											textAlign: "left",
											width: "100%",
										}}
									>
										<span>{option.name}</span>
										<span style={{ fontSize: '0.8rem', color: '#888' }}>
											{" Last Updated at:"} {dayjs(option.updatedAt).format(DATE_FORMAT)}
										</span>
									</li>
								)}
								renderInput={(params) => (
									<TextField
										{...params}
										label={"Select Saved Questionnaire"}
										InputProps={{
											...params.InputProps,
										}}
										sx={[styles.autoCompleteText, { paddingTop: "8px !important" }]}
									/>
								)}
								ListboxProps={{
									sx: {
										maxHeight: "200px",
										overflowY: 'auto',
									},
								}}
								sx={styles.autoComplete}
								onChange={async (_, value) => {
									setIsLoading(true);
									setOrganizationName(selectedOrder.organizationName);
									setQuestionnaireName(value.name);
									navigate(`/organizations/${selectedOrder?.assignments?.organization}/questionnaires/${value._id}?&software=${customSections.software}`)
									setIsLoading(false);
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
			)}
			{currentStep === 3
			&& (
				<Grid container direction="column" alignItems="center" spacing={2} mt={2}>
					<Grid item width="100%">
						{Object.keys(selectedOrder ?? {}).length > 0 && (
							<Grid container>
								<Typography sx={styles.text}>{"Selected organization"}</Typography>
								<Grid
									item
									width="100%"
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									
									sx={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}
								>
									<Typography sx={{ marginRight: 2 }}>{`${selectedOrder.organizationName}`}</Typography>
									<PrimaryBorderButton
										title="Change Organization"
										width="auto"
										disabled={isSubmitting || orders.length === 1}
										onClick={() => {
											setSelectedOrder({});
											setFile(null);
											setCurrentStep(0);
										}}
									/>
								</Grid>
							</Grid>
						)}
						{Object.keys(selectedQuestionnaire).length > 0 && (
							<Grid container>
								{<Typography sx={styles.text}>{"Selected Questionnaire"}</Typography>}
								<Grid
									item
									width="100%"
									display="flex"
									justifyContent="space-between"
									alignItems="center"
								
									sx={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}
								>
									{<Typography sx={{ marginRight: 2 }}>{selectedQuestionnaire.name}</Typography>}
									<PrimaryBorderButton
										title="Change"
										width="auto"
										disabled={isSubmitting}
										onClick={handleQuestionnaireDelete}
									/>
								</Grid>
							</Grid>
						)}
						{customSections.software && (
							file ? (
								<>
									<Grid container>
										{<Typography sx={styles.text}>{"Selected File/Folder"}</Typography>}
										<Grid
											item
											width="100%"
											display="flex"
											justifyContent="space-between"
											alignItems="center"
									
											sx={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}
										>
											{<Typography sx={{ marginRight: 2 }}>{file.name}</Typography>}
											<PrimaryBorderButton
												title="Change"
												width="auto"
												disabled={isSubmitting}
												onClick={handleFileDelete}
											/>
										</Grid>

									</Grid>
								</>
							) : (
								<Grid container mt={2}>
									<Grid item width="100%" display="flex" justifyContent="space-between" alignItems="center">
										<Typography sx={styles.text}>
											{"Upload your source code"}
										</Typography>
										<PrimaryBorderButton
											ref={anchorRef}
											title="Upload"
											disabled={isUploadButtonDisabled}
											onClick={handleToggle}
										>
											<ArrowDropDown
												sx={{
													transform: open ? "rotate(180deg)" : "rotate(0deg)",
													transition: "transform 0.3s ease",
												}}
											/>
										</PrimaryBorderButton>
										<Popper
											open={open}
											anchorEl={anchorRef.current}
											placement="bottom-start"
											style={{ zIndex: 1300 }}
										>
											<Paper ref={popperRef}>
												<MenuItem sx={{ width: "150px" }}>
													<Grid component="label" sx={styles.uploadButton}>
														{"Upload zip"}
														<input
															hidden
															type="file"
															accept=".zip"
															onChange={(e) => {
																handleClose();
																handleFileChange(e);
															}}
														/>
													</Grid>
												</MenuItem>
												<MenuItem sx={{ width: "150px" }}>
													<Grid component="label" sx={styles.uploadButton}>
														{"Upload Folder"}
														<input
															hidden
															type="file"
															webkitdirectory=""
															onChange={(e) => {
																handleClose();
																handleFileChange(e);
															}}
														/>
													</Grid>
												</MenuItem>
											</Paper>
										</Popper>
									</Grid>
									{fileError && (
										<Typography color="error" sx={{ marginBottom: 2 }}>
											{"There was an error uploading the file. Please upload a ZIP file or a smaller folder."}
										</Typography>
									)}
								</Grid>
							)
						)}
						{ Object.keys(selectedQuestionnaire).length > 0 && (customSections?.software ? file : true) && (
							<Grid container>
								{customSections?.practices && Object.keys(selectedQuestionnaire).length > 0  && (
									<Grid
										item
										width="100%"
										display="flex"
										justifyContent="center"
										alignItems="center"
										mt={2}
									>
										<Box display="inline-block">
											{(() => {
												return (<ThirdBackgroundButton
													width="200px"
													disabled={isSubmitting}
													buttonType="loading"
													loading={isSubmitting}
													title="Start Analysis"
													onClick={async () => await handleSubmit(selectedOrder)}
												/>)
											})()}
										</Box>
									</Grid>
								)}
							</Grid>	
						)}
					</Grid>
				</Grid>
			)}
			{currentStep === 4
			&& (
				<Grid container direction="column" alignItems="center" spacing={2} mt={2}>
					<Grid item width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
						<Image src={OnTheWayIcon} alt="OnTheWay" width="100px" />
						<Typography sx={styles.finalTitle} mt={1}>{"Your analysis is on the way!"}</Typography>
						<Typography sx={styles.finalSubtitle} mb={2}>{"You will be informed by email when the report is ready."}</Typography>
						<PrimaryBorderButton
							title="Back to Home"
							width="auto"
							onClick={handleHome}
						/>
					</Grid>
				</Grid>
			)}
		</Box>,
		<QuestionnaireModal
			key="questionnaire-modal"
			openQuestionnaireModal={openQuestionnaireModal}
			setOpenQuestionnaireModal={setOpenQuestionnaireModal}
			organizationId={selectedOrder?.assignments?.organization}
			software={customSections.software}
			isLoading={isLoadingOrgQuestionnaires}
			questionnaires={orgQuestionnaires}
		/>,
		<Spinner key="spinner" open={isLoading} />
	]);
};

Nis2Window.propTypes = {
	orders: PropTypes.array,
	isOrdersLoading: PropTypes.bool,
	ordersMutate: PropTypes.func,
	selectedOrder: PropTypes.object,
	setSelectedOrder: PropTypes.func,
};

export default Nis2Window;
