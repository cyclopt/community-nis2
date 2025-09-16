import { useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { TextField, Grid, FormGroup, Typography, FormControlLabel, Checkbox, Autocomplete } from "@mui/material";
import { ThirdBackgroundButton } from "./Buttons.jsx";
import Modal from "./Modal.jsx";
import { dayjs, useSnackbar, DATE_FORMAT } from "#utils";
import { createNis2Questionnaire } from "../api/index.js"

import useGlobalState from "../use-global-state.js";

import theme from "../theme.js";

const styles = {
	autoComplete: {
		width: "100%",
		size: "small"
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
			height: "40px",
			fontSize: '1rem',
			padding: '2px 20px',
			backgroundColor: 'transparent',
			'& fieldset': {
				border: `2px solid ${theme.palette.primary.main}`,
			},
		},
	},
	textField: {
		flex: 1,
		backgroundColor: "transparent",
		'& .MuiOutlinedInput-root': {
			backgroundColor: "transparent",
			height: "40px",
			border: `2px solid ${theme.palette.primary.main}`,
			borderRadius: theme.shape.borderRadiusWide,
			padding: "2px 20px",
		},
		'&.Mui-focused fieldset, & fieldset': {
			border: "none",
		},
		'&:hover fieldset': {
			border: "none",
		},
		'& input:-webkit-autofill': {
			backgroundColor: 'transparent !important',
			WebkitBoxShadow: '0 0 0 1000px transparent inset',
			WebkitTextFillColor: 'inherit',
			transition: 'background-color 5000s ease-in-out 0s',
		},
	}
};

const QuestionnaireModal = ({
	openQuestionnaireModal,
	setOpenQuestionnaireModal,
	organizationId,
	software,
	isLoading,
	questionnaires
}) => {
	const [newQuestionnaireName, setNewQuestionnaireName] = useState("");
	const [selectedQuestionnaireTemplate, setSelectedQuestionnaireTemplate] = useState(null);
	const [isCreating, setIsCreating] = useState(false);
	const [checked, setChecked] = useState(true);
	const { success, error } = useSnackbar();
	const navigate = useNavigate();

	const { setQuestionnaireName } = useGlobalState(useCallback((e) => ({
		setQuestionnaireName: e.setQuestionnaireName,
	}), []));

	const isCreateDisabled = useMemo(() => {
		if (isCreating || newQuestionnaireName.length === 0 || (!checked && !selectedQuestionnaireTemplate)) return true;

		return false;
	}, [checked, isCreating, newQuestionnaireName.length, selectedQuestionnaireTemplate])

	const createNewQuestionnaire = async (orgId, selectedQuestionnaireTemplate) => {
		try {
			setIsCreating(true);
			const newQuestionnaire = await createNis2Questionnaire(orgId, newQuestionnaireName, selectedQuestionnaireTemplate)
			setQuestionnaireName(newQuestionnaire.name);
			setIsCreating(false);
			success("Your Questionnaire has been created!")
			navigate(`/organizations/${organizationId}/questionnaires/${newQuestionnaire._id}?&software=${software}`)
		} catch (_error){
			const errorMsg = await _error.response.json() ?? "Oops, something went wrong ";
			error(errorMsg.message);
			setIsCreating(false);
			setNewQuestionnaireName("");
			setOpenQuestionnaireModal(true)
		}
	}

	const resetModal = () => {
		setNewQuestionnaireName("");
		setOpenQuestionnaireModal(false)
	};

	return (
		<Modal
			keepMounted
			disableAreYouSureDialog={newQuestionnaireName.length === 0}
			widthAuto
			open={openQuestionnaireModal}
			title={"Create a new Questionnaire"}
			sx={{ width: "max-content" }}
			actions={
				<ThirdBackgroundButton
					buttonType="loading"
					loading={isCreating}
					disabled={isCreateDisabled}
					title="Submit"
					onClick={async () => {
						await createNewQuestionnaire(organizationId, selectedQuestionnaireTemplate);
						resetModal();
					}}
				/>
			}
			onClose={resetModal}
		>
			<Grid container direction="column" sx={{ width: 400 }}>
				<FormGroup>
					<Grid container alignItems="center" sx={{ gap: "1rem", width: "100%", mb: "0.5rem"}}>
						<TextField
							required
							disabled={isCreating}
							id="questionnaire-name"
							size="small"
							sx={styles.textField}
							value={newQuestionnaireName || ""}
							placeholder="Provide a name for your questionnaire"
							onChange={(e) => setNewQuestionnaireName(e.target.value)}
						/>
					</Grid>
					<Grid sx={{ width: "fit-content" }}>
						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox defaultChecked checked={checked} size="small" onChange={(event) => { setChecked(event.target.checked) }}/>
								}
								label={
									<Typography fontSize="0.9rem">
										{"Start with an empty questionnaire"}
									</Typography>
								}
							/>
						</FormGroup>
					</Grid>
					{
						!checked && (
							<Grid display="flex" sx={{ width: "100%", mb: "0.5rem" }}>
								<Autocomplete
									fullWidth
									loading={isLoading}
									options={questionnaires}
									getOptionLabel={(option) => option?.name || ""}
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
											label={"Select an existing questionnaire as template"}
											InputProps={{
												...params.InputProps,
											}}
											sx={[styles.autoCompleteText, { paddingTop: "8px !important" }]}
										/>
									)}
									sx={styles.autoComplete}
									onChange={async (_, value) => {
										setSelectedQuestionnaireTemplate(value);
									}}
								/>
							</Grid>
						)
					}
				</FormGroup>
			</Grid>
		</Modal>
	);
};

QuestionnaireModal.propTypes = {
	openQuestionnaireModal: PropTypes.bool,
	setOpenQuestionnaireModal: PropTypes.func,
	organizationId: PropTypes.string,
	software: PropTypes.string,
	isLoading: PropTypes.bool,
	questionnaires: PropTypes.array,
};

export default QuestionnaireModal;
