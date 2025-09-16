import { Autocomplete, Box, createFilterOptions, TextField, styled } from "@mui/material";

import theme from "../theme.js";

const PREFIX = "TCTT-Autocomplete";

const classes = {
	primaryBackground: `${PREFIX}-primaryBackground`,
	primaryBorder: `${PREFIX}-primaryBorder`,
	whiteIcon: `${PREFIX}-whiteIcon`,
	primaryIcon: `${PREFIX}-primaryIcon`
};

const StyledTextField = styled(TextField)(({ customTheme }) => ({
	[`&.${classes.primaryBackground}`]: {
		color: "white!important",
		backgroundColor: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
		border: `2px solid ${customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || ""}`,
		borderRadius: customTheme?.shape?.borderRadius || theme?.shape?.borderRadius || "5px",
		fontFamily: "inherit",
		"&:hover": {
			color: "white",
			backgroundColor: customTheme?.palette?.primary?.dark || theme?.palette?.primary?.dark || "",
			border: `2px solid ${customTheme?.palette?.primary?.dark || theme?.palette?.primary?.dark || ""}`,
		},
		"&:disabled": {
			color: "white",
			backgroundColor: customTheme?.palette?.grey?.main || theme?.palette?.grey?.main || "",
			border: `2px solid ${customTheme?.palette?.grey?.main || theme?.palette?.grey?.main || ""}`,
		},
	},
	[`&.${classes.primaryBorder}`]: {
		color: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
		backgroundColor: "transparent",
		border: `2px solid ${customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || ""}`,
		borderRadius: customTheme?.shape?.borderRadius || theme?.shape?.borderRadius || "5px",
		fontFamily: "inherit",
		"&:hover": {
			color: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
			backgroundColor: customTheme?.palette?.grey?.light || theme?.palette?.grey?.light || "",
			border: `2px solid ${customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || ""}`,
		},
		"&:disabled": {
			color: "white",
			backgroundColor: customTheme?.palette?.grey?.main || theme?.palette?.grey?.main || "",
			border: `2px solid ${customTheme?.palette?.grey?.main || theme?.palette?.grey?.main || ""}`,
		},
	},
	[`&.${classes.whiteIcon}`]: {
		color: "white",
	},
	[`&.${classes.primaryIcon}`]: {
		color: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
	}
}));

const filter = createFilterOptions();

export const PrimaryBackgroundAutocomplete = ({
	id = "primary-background-autocomplete",
	disabled = false,
	className = "",
	label = "Label",
	placeholder = "Placeholder",
	width = "200px",
	height = "40px",
	fontSize = "14px",
	options = [],
	allowCustomInput = true,
	value = "",
	customTheme,
	onChange = () => {},
}) => (
	<Autocomplete
		key={id}
		id={id}
		value={value}
		disabled={disabled}
		placeholder={placeholder}
		style={{ ...(width && { width }), ...(height && { height }) }}
		options={options}
		renderOption={(props, option) => {
			const { key, ...optionProps } = props;
			return (
				<Box
					key={key}
					component="li"
					sx={{ "& > img": { mr: 2, flexShrink: 0 }, fontFamily: "inherit" }}
					{...optionProps}
				>
					{option}
				</Box>
			);
		}}
		renderInput={(params) => (<StyledTextField customTheme={customTheme} className={`${className} ${classes.primaryBackground}`} {...params} label={label} />)}
		filterOptions={(options, params) => {
			const filtered = filter(options, params);
			if (params.inputValue !== "" && allowCustomInput) {
				filtered.push(params.inputValue);
			}
			return filtered;
		}}
		sx={{
			...(width && { width }),
			fontSize,
			fontFamily: "inherit",
			"& .MuiInputBase-root": {
				height,
				fontFamily: "inherit",
			},
			"& .MuiInputLabel-root": {
				transform: `translate(14px, ${value ? "-9" : "11"}px) scale(${value ? "0.75" : "1"})`,
				fontFamily: "inherit",
			},
			"& .MuiInputLabel-root.Mui-focused": {
				transform: "translate(14px, -9px) scale(0.75)",
				fontFamily: "inherit",
			},
		}}
		onChange={(_, newValue) => onChange(newValue)}
	/>
);

export const PrimaryBorderAutocomplete = ({
	id = "primary-border-autocomplete",
	disabled = false,
	className = "",
	label = "Label",
	placeholder = "Placeholder",
	width = "200px",
	height = "40px",
	fontSize = "14px",
	options = [],
	allowCustomInput = true,
	value = "",
	customTheme,
	onChange = () => {},
}) => (
	<Autocomplete
		key={id}
		id={id}
		value={value}
		disabled={disabled}
		placeholder={placeholder}
		style={{ ...(width && { width }), ...(height && { height }) }}
		options={options}
		renderOption={(props, option) => {
			const { key, ...optionProps } = props;
			return (
				<Box
					key={key}
					component="li"
					sx={{ "& > img": { mr: 2, flexShrink: 0 }, fontFamily: "inherit" }}
					{...optionProps}
				>
					{option}
				</Box>
			);
		}}
		renderInput={(params) => (<StyledTextField customTheme={customTheme} className={`${className} ${classes.primaryBorder}`} {...params} label={label} />)}
		filterOptions={(options, params) => {
			const filtered = filter(options, params);
			if (params.inputValue !== "" && allowCustomInput) {
				filtered.push(params.inputValue);
			}
			return filtered;
		}}
		sx={{
			...(width && { width }),
			fontSize,
			fontFamily: "inherit",
			"& .MuiInputBase-root": {
				height,
				fontFamily: "inherit",
			},
			"& .MuiInputLabel-root": {
				transform: `translate(14px, ${value ? "-9" : "11"}px) scale(${value ? "0.75" : "1"})`,
				fontFamily: "inherit",
			},
			"& .MuiInputLabel-root.Mui-focused": {
				transform: "translate(14px, -9px) scale(0.75)",
				fontFamily: "inherit",
			},
		}}
		onChange={(_, newValue) => onChange(newValue)}
	/>
);
