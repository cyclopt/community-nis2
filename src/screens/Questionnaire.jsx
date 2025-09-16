import { memo, useState, useMemo, useEffect, useCallback, useRef } from "react";
import { dequal } from "dequal";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Grid, Typography, Tabs, Tab, LinearProgress } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import queryString from "query-string";
import { useSnackbar } from "#utils";
import questions from "../utils/questionnaire.js";
import Form from "../components/Form.jsx";
import { PrimaryBorderButton, ThirdBackgroundButton } from "../components/Buttons.jsx";
import { updateNis2Questionnaire, useNis2Questionnaire } from "../api/index.js"
import theme from "../theme.js";

// Check if the answers of the questionnaire have changed
// We need to transform the values from strings to numbers to use dequal
const normalize = (obj) =>
	Object.fromEntries(
		Object.entries(obj).map(([key, val]) => [key, val == null ? val : Number(val)])
	);

const areSectionAnswersDifferent = (prevAnswers, curAnswers) => {
	const prev = normalize(prevAnswers);
	const cur = normalize(curAnswers);

	return !dequal(prev, cur);
};

const Questionnaire = () => {
	const { search } = useLocation();
	const { organizationId, questionnaireId } = useParams();
	// This state is used to update the responses of Questionnaire when changing Tabs
	const [pendingTab, setPendingTab] = useState(null);
	const [isUpdating, setIsUpdating] = useState(false);
	const [isSaveMode, setIsSaveMode] = useState(false);
	const [currentQuestionnaireCategory, setCurrentQuestionnaireCategory] = useState(Object.keys(questions)[0]);
	const [lastModifiedSection, setLastModifiedSection] = useState();
	const [questionnaireResponses, setQuestionnaireResponses] = useState({});
	// Can either be 1 or -1 to navigate from NEXT/PREVIOUS buttons
	const [navigationOffset, setNavigationOffset] = useState(0);
	// Reference to track the state of formik inside Form component
	const formikRef = useRef();
	const { success, error } = useSnackbar();
	const navigate = useNavigate();
	const {questionnaire = {}, isLoading: isLoadingQuestionnaire, isError: isErrorQuestionnaire } = useNis2Questionnaire(questionnaireId);

	// Track the completeness of each section
	// All questions must be answered to set a section complete
	const areSectionsComplete = useMemo(() => {
		return Object.entries(questionnaireResponses).reduce((acc, [subsectionId, questionsObj]) => {
			const isComplete = !Object.values(questionsObj).includes(null);
			acc[subsectionId] = { isComplete };
			return acc;
		}, {})
	}, [questionnaireResponses]);

	useEffect(() => {
		if (isErrorQuestionnaire) error();
	}, [isErrorQuestionnaire, error]);

	// Update the questionnaire Responses default values with the default values of all questions
	useEffect(() => {
		if (Object.keys(questionnaire).length > 0 && questionnaire?.sections?.length > 0) {
			const savedQuestionnaireResponses = questionnaire.sections.reduce((acc, section) => {
				const { subsection, questions } = section;

				// If subsection key doesn't exist yet, create it
				if (!acc[subsection]) {
					acc[subsection] = {};
				}

				// Map each question to its answer
				for (const q of questions) {
					acc[subsection][q.question] = q.answer;
				}

				return acc;
			}, {});

			setQuestionnaireResponses(savedQuestionnaireResponses);

			// find last accessed section
			const lastAccessedSection = questionnaire.sections.find((section) => section.lastModified)?.subsection?.toString() || Object.keys(questions)[0];
			setLastModifiedSection(lastAccessedSection);
			setCurrentQuestionnaireCategory(lastAccessedSection)
		} else {
			const defaultQuestionnaireResponses = Object.entries(questions).reduce((acc, [categoryKey, categoryValue]) => {
				acc[categoryKey] = categoryValue.questions.reduce((questionAcc, question) => {
					questionAcc[question.id] = question.defaultValue;
					return questionAcc;
				}, {});
				return acc;
			}, {});

			setQuestionnaireResponses(defaultQuestionnaireResponses);
		}
	}, [questionnaire]);

	const isPreviousButtonDisabled = useMemo(() => {
		return Number(currentQuestionnaireCategory) === 1;
	}, [currentQuestionnaireCategory]);

	const isNextButtonDisabled = useMemo(() => {
		const categories = Object.keys(questions);
		return Number(currentQuestionnaireCategory) === Number(categories.length);
	}, [currentQuestionnaireCategory]);

	const changeQuestionnaireCategory = useCallback((values, offset = null) => {
		const categories = Object.keys(questions);
		const currentIndex = categories.indexOf(currentQuestionnaireCategory);
	
		const tempQuestionnaireResponses = { ...questionnaireResponses };
		if (currentQuestionnaireCategory && values) {
			tempQuestionnaireResponses[currentQuestionnaireCategory] = values;
			setQuestionnaireResponses(tempQuestionnaireResponses);
		}
		
		if (offset) {
			setCurrentQuestionnaireCategory(categories[currentIndex + offset]);
		}
	}, [currentQuestionnaireCategory, questionnaireResponses]);

	const formContent = useMemo(() => {
		if (currentQuestionnaireCategory) {
			const currentResponses = questionnaireResponses[currentQuestionnaireCategory] || {};
			return [ 
				...(questions?.[currentQuestionnaireCategory] || []).questions.map((question) => ({
					customType: "radio",
					id: question.id,
					label: `${question.id}. ${question.question}`,
					color: "secondary",
					defaultValue: currentResponses[question.id] ?? question.defaultValue,
					row: false,
					items: question.answers,
					typographySx: { fontWeight: "bold" },
				})),
				{
					customType: "component",
					component: (
						<Grid container spacing="2rem">
							<Grid item>
								<PrimaryBorderButton
									customTheme={{ shape: { borderRadius: "20px" }}}
									title={"Previous"}
									type="submit"
									disabled={isPreviousButtonDisabled}
									onClick={() => setNavigationOffset(-1)}
								/>
							</Grid>
							<Grid item>
								<PrimaryBorderButton
									customTheme={{ shape: { borderRadius: "20px" }}}
									title={"Next"}
									type="submit"
									disabled={isNextButtonDisabled}
									onClick={() => setNavigationOffset(1)}
								/>
							</Grid>
						</Grid>
					),
				},
			];
		}

		return [];
	}, [currentQuestionnaireCategory, questionnaireResponses, isPreviousButtonDisabled, isNextButtonDisabled]);
	
	return (
		<>
			{isLoadingQuestionnaire || isUpdating && (<LinearProgress />)}
			<Grid container className="header-container" display="flex" direction="column">
				<Grid display="flex" justifyContent="space-between" alignItems="center">
					<Typography variant="h4" py="1rem">{"NIS2 QUESTIONNAIRE"}</Typography>
					<ThirdBackgroundButton
						buttonType="loading"
						loading={isUpdating}
						disabled={isLoadingQuestionnaire || isUpdating}
						title="Save"
						onClick={() => {
							setIsUpdating(true);
							// handle updating the last edited category
							setIsSaveMode(true);
							setPendingTab(currentQuestionnaireCategory); // store the target tab
							formikRef.current?.submitForm(); // trigger submit
						}}
					/>
				</Grid>
				<Grid item sx={{ width: '100%', overflowX: 'auto', my: "1rem" }}>
					<Tabs
						disabled={isLoadingQuestionnaire}
						value={currentQuestionnaireCategory}
						variant="scrollable"
						scrollButtons
						allowScrollButtonsMobile
						// The state of formik current values is updated through submit 
						onChange={(_, newVal) => {
							setPendingTab(newVal); // store the target tab
							formikRef.current?.submitForm(); // trigger submit
						}}
						aria-label="Questionnaire categories"
					>
						{Object.entries(questions).map(([key, value]) => (
							<Tab key={key} icon={areSectionsComplete[key]?.isComplete ? <CheckCircleIcon sx={{ color: theme.palette.secondary.main }}/> : null} iconPosition="end" label={value.title} value={key} />
						)
						)}
					</Tabs>
				</Grid>
				{!isLoadingQuestionnaire && (
					<Grid container my="2rem">
						<Form
							content={formContent}
							formikRef={formikRef}
							toResetForm={false}
							disabled={isLoadingQuestionnaire}
							onSubmit={(values) => {
								if (pendingTab === null) {
									// Switching via next/previous buttons
									changeQuestionnaireCategory(values, navigationOffset);
									setNavigationOffset(0);
								} else {
									// Switching via tab
									const tempQuestionnaireResponses = { ...questionnaireResponses };
									tempQuestionnaireResponses[currentQuestionnaireCategory] = values;
									const isSectionModified = areSectionAnswersDifferent(questionnaireResponses[currentQuestionnaireCategory], tempQuestionnaireResponses[currentQuestionnaireCategory]);
									if(isSectionModified) setLastModifiedSection(currentQuestionnaireCategory);

									setQuestionnaireResponses(tempQuestionnaireResponses);
									setCurrentQuestionnaireCategory(pendingTab);
									setPendingTab(null);

									if (isSaveMode) {
										(async () => {
											try {
												const { edit, software } = queryString.parse(search);
												const modifiedSection = isSectionModified ? currentQuestionnaireCategory : lastModifiedSection
												const updatedQuestionnaire = await updateNis2Questionnaire(questionnaireId, tempQuestionnaireResponses, modifiedSection);
												success("Your Questionnaire has been updated!")
												setIsUpdating(false);
												setIsSaveMode(false);
												if (edit) {
													navigate(`/organizations/${organizationId}/reports`, { replace: true })
												} else {
													navigate(`/home?questionnaireId=${updatedQuestionnaire._id}&software=${software}`)
												}
											} catch (_error) {
												const errorMsg = await _error.response.json() ?? "Oops, something went wrong ";
												error(errorMsg.message);
												setIsUpdating(false);
												setIsSaveMode(false);
											}
										})();
									}
								}
							}}
						/>
					</Grid>
				)}
			</Grid>
		</>
	);
}

export default memo(Questionnaire);
