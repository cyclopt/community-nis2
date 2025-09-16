import { memo, useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Grid, Typography, styled, CircularProgress } from "@mui/material";
import { Formik } from "formik";

import theme from "../theme.js";
import { PrimaryBackgroundButton, SecondaryBackgroundButton, ThirdBackgroundButton} from "./Buttons.jsx";
import { PrimaryBackgroundAutocomplete, PrimaryBorderAutocomplete } from "./Autocomplete.jsx";
import { PrimaryCheckbox } from "./Checkbox.jsx";
import { PrimaryBackgroundCheckboxesDropdown, PrimaryBorderCheckboxesDropdown } from "./CheckboxesDropdown.jsx";
import { PrimaryBorderDatepicker } from "./Datepicker.jsx";
import { PrimaryBackgroundDropdown, PrimaryBorderDropdown } from "./Dropdowns.jsx";
import { Input as InputComponent } from "./Input.jsx";
import { PrimarySwitch } from "./Switches.jsx";
import { PrimarySlider } from "./Slider.jsx";
import { PrimaryRadioButtons } from "./RadioButtons.jsx";

const PREFIX = "TCTT-Form";

const classes = {
	form: `${PREFIX}-form`,
	inputBox: `${PREFIX}-inputBox`,
	input: `${PREFIX}-input`,
	autocomplete: `${PREFIX}-autocomplete`,
	dropdown: `${PREFIX}-dropdown`,
	checkboxBox: `${PREFIX}-checkboxBox`,
	checkboxesDropdown: `${PREFIX}-checkboxesDropdown`,
	checkbox: `${PREFIX}-checkbox`,
	radioBox: `${PREFIX}-radioBox`,
	sliderBox: `${PREFIX}-sliderBox`,
	datepickerBox: `${PREFIX}-datepickerBox`,
	switchBox: `${PREFIX}-switchBox`,
	buttonTitle: `${PREFIX}-buttonTitle`,
	markLabel: `${PREFIX}-markLabel`,
	button: `${PREFIX}-button`
};

const StyledFormik = styled("form")(({ customTheme }) => ({
	[`&.${classes.form}`]: {
		width: "100%",
		display: "flex",
		justifyContent: "space-evenly",
		flexDirection: "column",
		alignItems: "center",
		textAlign: "center",
	},
	[`& .${classes.inputBox}`]: {
		width: "100%",
		marginBottom: "10px",
		display: "flex",
		flexDirection: "column",
		color: "black",
	},
	[`& .${classes.input}`]: {
		color: "black",
		width: "100%",
		backgroundColor: "white",
		opacity: 0.7,
		borderRadius: "4px",
		marginTop: "5px",
		marginBottom: "10px",
		"&:hover": {
			opacity: 0.8,
		},
	},
	[`& .${classes.autocomplete}`]: {
		color: "black",
		width: "100%",
		height: "40px",
		backgroundColor: "white",
		opacity: 0.7,
		borderRadius: "4px",
		border: `2px solid ${customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || ""}`,
		marginTop: "5px",
		marginBottom: "10px",
		"&:hover": {
			opacity: 0.8,
		},
	},
	[`& .${classes.dropdown}`]: {
		width: "100%",
		marginBottom: "10px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		color: "black",
	},
	[`& .${classes.checkboxBox}`]: {
		width: "100%",
		marginBottom: "10px",
		display: "flex",
	},
	[`& .${classes.checkboxesDropdown}`]: {
		width: "100%",
		marginBottom: "10px",
		display: "flex",
		flexDirection: "column",
	},
	[`& .${classes.checkbox}`]: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		color: "black",
	},
	[`& .${classes.radioBox}`]: {
		width: "100%",
		marginBottom: "10px",
		display: "flex",
		flexDirection: "column",
		color: "black",
	},
	[`& .${classes.sliderBox}`]: {
		width: "100%",
		marginBottom: "10px",
		display: "flex",
		flexDirection: "column",
		color: "black",
	},
	[`& .${classes.datepickerBox}`]: {
		width: "100%",
		marginBottom: "10px",
		display: "flex",
		flexDirection: "column",
		color: "black",
	},
	[`& .${classes.switchBox}`]: {
		width: "100%",
		marginTop: "10px",
		marginBottom: "10px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		color: "black",
	},
	[`& .${classes.buttonTitle}`]: {
		color: "black",
		letterSpacing: theme.spacing(0.1),
	},
	[`& .${classes.markLabel}`]: {
		color: "black",
	},
	[`& .${classes.button}`]: {
		width: "100%",
	}
}));

const Form = forwardRef(({
	width = "100%",
	disabled: dsb,
	content,
	validationSchema,
	onSubmit,
	onSubmitProps,
	toResetForm = false,
	customTheme,
	formikRef,
}, ref) => {
	const [formContent, setFormContent] = useState(content);
	const [disabled, setDisabled] = useState(dsb);
	const formRef = useRef();

	// Forward the local Formik instance to the parent
	useEffect(() => {
		if (formikRef) {
			formikRef.current = formRef.current;
		}
	}, [formikRef]);

	useEffect(() => {
		setFormContent(content);
	}, [content]);

	useEffect(() => {
		setDisabled(dsb);
	}, [dsb]);

	useImperativeHandle(ref, () => ({
		getFormValues() {
			return formRef.current.values;
		},
	}));

	useImperativeHandle(ref, () => ({
		setFieldValue(field, value) {
			formRef.current.setFieldValue(field, value);
		},
	}));

	return (
		<Formik
			enableReinitialize
			innerRef={formRef}
			initialValues={formContent.reduce((a, v) => (
				(v.customType === "input")
					? { ...a, [v.id]: v.value || "" }
					: (v.customType === "autocomplete"
					|| v.customType === "dropdown"
					|| v.customType === "checkbox"
					|| v.customType === "radio"
					|| v.customType === "slider"
					|| v.customType === "switch"
						? { ...a, [v.id]: v.defaultValue }
						: (v.customType === "date-picker"
							? { ...a, [v.id]: v.value || null }
							: (v.customType === "checkboxes-dropdown"
								? { ...a, [v.id]: v.value || [] }
								: a
							)
						)
					)
			), {})}
			validationSchema={validationSchema || null}
			validateOnChange={false}
			onSubmit={(...formikArgs) => {
				onSubmit(...formikArgs, onSubmitProps);
				const [, { resetForm, setSubmitting }] = formikArgs;
				if (toResetForm) resetForm();
				setSubmitting(false);
			}}
		>
			{(formikProps) => (
				<StyledFormik className={classes.form} style={{ ...(width && { width })}} onSubmit={formikProps.handleSubmit} customTheme={customTheme}>
					{formContent.map((comp) => (
						<div
							key={comp.id}
							style={{ width: "100%", display: "flex", justifyContent: "center" }}
						>
							{comp.customType === "input"
							&& (
								<Grid key={comp.id} container className={classes.inputBox}>
									<Typography textAlign="left">{comp.label}</Typography>
									<InputComponent
										key={comp.id}
										id={comp.id}
										type={comp.type}
										multiline={comp.multiline}
										minRows={comp.minRows}
										maxRows={comp.maxRows}
										className={classes.input}
										placeholder={comp.placeholder}
										variant="filled"
										color="third"
										InputProps={comp.inputProps}
										value={formikProps.values[comp.id]}
										error={Boolean(formikProps.errors[comp.id])}
										helperText={formikProps.errors[comp.id]}
										disabled={disabled || comp.disabled}
										onChange={(event) => {
											formikProps.handleChange(event);
											if (comp.onChange) {
												comp.onChange(event);
											}
										}}
										customTheme={customTheme}
									/>
								</Grid>
							)}
							{comp.customType === "autocomplete"
							&& (
								<Grid container className={classes.checkboxBox}>
									{comp.filled && (
										<PrimaryBackgroundAutocomplete
											key={comp.id}
											id={comp.id}
											disabled={disabled || comp.disabled}
											placeholder={comp.placeholder}
											width="100%"
											allowCustomInput={comp.allowCustomInput}
											options={comp.options}
											label={comp.label}
											value={formikProps.values[comp.id]}
											onChange={(value) => {
												formikProps.handleChange({
													target: {
														name: comp.id,
														value,
													},
												});
												if (comp.onChange) {
													comp.onChange(value);
												}
											}}
											customTheme={customTheme}
										/>			
									)}
									{!comp.filled && (
										<PrimaryBorderAutocomplete
											key={comp.id}
											id={comp.id}
											disabled={disabled || comp.disabled}
											placeholder={comp.placeholder}
											width="100%"
											allowCustomInput={comp.allowCustomInput}
											options={comp.options}
											label={comp.label}
											value={formikProps.values[comp.id]}
											onChange={(value) => {
												formikProps.handleChange({
													target: {
														name: comp.id,
														value,
													},
												});
												if (comp.onChange) {
													comp.onChange(value);
												}
											}}
											customTheme={customTheme}
										/>			
									)}
									{Boolean(formikProps.errors[comp.id])
									&& (
										<Typography color="error" fontSize="small">{formikProps.errors[comp.id]}</Typography>
									)}
								</Grid>
							)}
							{comp.customType === "dropdown"
							&& (
								<Grid className={classes.dropdown}>
									<Typography>{comp.label}</Typography>
									{comp.filled && (
										<PrimaryBackgroundDropdown
											id={comp.id}
											items={comp.items}
											value={formikProps.values[comp.id]}
											disabled={disabled || comp.disabled}
											size={comp?.size || "medium"}
											width={comp?.width || width || "200px"}
											onChange={(event) => {
												formikProps.handleChange({
													target: {
														name: comp.id,
														value: event.target.value,
													},
												});
												if (comp.onChange) {
													comp.onChange(event);
												}
											}}
											customTheme={customTheme}
										/>
									)}
									{!comp.filled && (
										<PrimaryBorderDropdown
											id={comp.id}
											items={comp.items}
											value={formikProps.values[comp.id]}
											disabled={disabled || comp.disabled}
											size={comp?.size || "medium"}
											width={comp?.width || width || "200px"}
											onChange={(event) => {
												formikProps.handleChange({
													target: {
														name: comp.id,
														value: event.target.value,
													},
												});
												if (comp.onChange) {
													comp.onChange(event);
												}
											}}
											customTheme={customTheme}
										/>
									)}
								</Grid>
							)}
							{comp.customType === "checkboxes-dropdown"
							&& (
								<Grid className={classes.checkboxesDropdown}>
									<Typography align="left">{comp.label}</Typography>
									{comp.filled && (
										<PrimaryBackgroundCheckboxesDropdown
											id={comp.id}
											options={comp.options}
											value={formikProps.values[comp.id]}
											placeholder={comp.label}
											width={comp?.width || width || "200px"}
											disabled={disabled || comp.disabled}
											onChange={(value) => {
												formikProps.handleChange({
													target: {
														name: comp.id,
														value,
													},
												});
												if (comp.onChange) {
													comp.onChange(value);
												}
											}}
											customTheme={customTheme}
										/>
									)}
									{!comp.filled && (
										<PrimaryBorderCheckboxesDropdown
											id={comp.id}
											options={comp.options}
											value={formikProps.values[comp.id]}
											placeholder={comp.label}
											width={comp?.width || width || "200px"}
											disabled={disabled || comp.disabled}
											onChange={(value) => {
												formikProps.handleChange({
													target: {
														name: comp.id,
														value,
													},
												});
												if (comp.onChange) {
													comp.onChange(value);
												}
											}}
											customTheme={customTheme}
										/>
									)}
								</Grid>
							)}
							{comp.customType === "checkbox"
							&& (
								<Grid container className={classes.checkboxBox}>
									<Grid className={classes.checkbox}>
										<Typography>{comp.label}</Typography>
										<PrimaryCheckbox
											key={comp.id}
											id={comp.id}
											checked={formikProps.values[comp.id]}
											size={comp.size}
											color={comp.color || "primary"}
											sx={{
												color: `${comp.color || "primary"}.main`,
												"&.Mui-checked": {
													color: `${comp.color || "primary"}.main`,
												},
											}}
											icon={comp.icon}
											checkedIcon={comp.checkedIcon}
											disabled={disabled || comp.disabled}
											onChange={(event) => {
												formikProps.handleChange({
													target: {
														name: comp.id,
														value: !formikProps.values[comp.id],
													},
												});
												if (comp.onChange) {
													comp.onChange(event);
												}
											}}
											customTheme={customTheme}
										/>
									</Grid>
									{Boolean(formikProps.errors[comp.id])
									&& (
										<Typography color="error" fontSize="small">{formikProps.errors[comp.id]}</Typography>
									)}
								</Grid>
							)}
							{comp.customType === "radio"
							&& (
								<Grid key={comp.id} container className={classes.radioBox}>
									<Typography textAlign="left" {...(comp.typographySx ? { sx: comp.typographySx } : {})}>{comp.label}</Typography>
									<PrimaryRadioButtons
										id={comp.label}
										value={formikProps.values[comp.id]}
										row={comp.row}
										labelPlacement={comp.labelPlacement}
										disabled={disabled || comp.disabled}
										items={comp.items}
										onChange={(event) => {
											formikProps.handleChange({
												target: {
													name: comp.id,
													value: event.target.value,
												},
											});
											if (comp.onChange) {
												comp.onChange(event);
											}
										}}
										customTheme={customTheme}
									/>
									{Boolean(formikProps.errors[comp.id])
									&& (
										<Typography textAlign="left" color="error" fontSize="small">{formikProps.errors[comp.id]}</Typography>
									)}
								</Grid>
							)}
							{comp.customType === "slider"
							&& (
								<Grid key={comp.id} container className={classes.sliderBox}>
									<Typography textAlign="left">{comp.label}</Typography>
									<PrimarySlider
										iconBefore={comp.iconBefore}
										iconAfter={comp.iconAfter}
										value={formikProps.values[comp.id]}
										min={comp.min}
										max={comp.max}
										marks={comp.marks}
										step={comp.step}
										size={comp.size}
										track={comp.track}
										valueLabelDisplay={comp.displayLabel}
										disabled={disabled || comp.disabled}
										onChange={(event) => {
											formikProps.handleChange({
												target: {
													name: comp.id,
													value: event.target.value,
												},
											});
											if (comp.onChange) {
												comp.onChange(event);
											}
										}}
										customTheme={customTheme}
									/>
									{Boolean(formikProps.errors[comp.id])
									&& (
										<Typography textAlign="left" color="error" fontSize="small">{formikProps.errors[comp.id]}</Typography>
									)}
								</Grid>
							)}
							{comp.customType === "switch"
							&& (
								<Grid key={comp.id} container className={classes.switchBox}>
									<Typography textAlign="left">{comp.label}</Typography>
									<PrimarySwitch
										color={comp.color || "primary"}
										checked={formikProps.values[comp.id]}
										size={comp.size}
										disabled={disabled || comp.disabled}
										onChange={(event) => {
											formikProps.handleChange({
												target: {
													name: comp.id,
													value: !formikProps.values[comp.id],
												},
											});
											if (comp.onChange) {
												comp.onChange(event);
											}
										}}
										customTheme={customTheme}
									/>
									{Boolean(formikProps.errors[comp.id])
									&& (
										<Typography textAlign="left" color="error" fontSize="small">{formikProps.errors[comp.id]}</Typography>
									)}
								</Grid>
							)}
							{comp.customType === "date-picker"
							&& (
								<Grid key={comp.id} container className={classes.datepickerBox}>
									<Typography textAlign="left">{comp.label}</Typography>
									<PrimaryBorderDatepicker
										type={comp.type || "desktop"} // desktop, mobile, time, datetime
										value={formikProps.values[comp.id]}
										disabled={disabled || comp.disabled}
										label={comp.sublabel || ""}
										views={comp.views || ["day", "month", "year"]}
										width={comp.width || width || "200px"}
										onChange={(value) => {
											formikProps.handleChange({
												target: {
													name: comp.id,
													value,
												},
											});
											if (comp.onChange) {
												comp.onChange(event);
											}
										}}
										customTheme={customTheme}
									/>
									{Boolean(formikProps.errors[comp.id])
									&& (
										<Typography textAlign="left" color="error" fontSize="small">{formikProps.errors[comp.id]}</Typography>
									)}
								</Grid>
							)}
							{comp.customType === "component"
							&& (
								comp.component
							)}
							{comp.customType === "button"
							&& (
								comp.color === "third"
									? (
										<ThirdBackgroundButton
											id={comp.id}
											type={comp.type}
											width={comp.width || width || "200px"}
											disabled={formikProps.isSubmitting || disabled || comp.disabled}
											startIcon={formikProps.isSubmitting || disabled ? <CircularProgress size={24}/> : null}
											className={classes.button}
											title={formikProps.isSubmitting || disabled ? "": comp.text}
											customTheme={customTheme}
										/>
									)
									: (comp.color === "secondary"
										? (
											<SecondaryBackgroundButton
												id={comp.id}
												type={comp.type}
												width={comp.width || width || "200px"}
												disabled={formikProps.isSubmitting || disabled || comp.disabled}
												className={classes.button}
												title={comp.text}
												customTheme={customTheme}
											/>
										)
										: (
											<PrimaryBackgroundButton
												id={comp.id}
												type={comp.type}
												width={comp.width || width || "200px"}
												disabled={formikProps.isSubmitting || disabled || comp.disabled}
												className={classes.button}
												title={comp.text}
												customTheme={customTheme}
											/>
										)
									)
							)}
						</div>
					))}
				</StyledFormik>
			)}
		</Formik>
	);
});

export default memo(Form);
