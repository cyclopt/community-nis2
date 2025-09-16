import { MenuItem, Select, styled } from "@mui/material";

import theme from "../theme.js";

const PREFIX = "TCTT-Dropdowns";

const classes = {
	primaryBackground: `${PREFIX}-primaryBackground`,
	primaryBorder: `${PREFIX}-primaryBorder`,
	whiteIcon: `${PREFIX}-whiteIcon`,
	primaryIcon: `${PREFIX}-primaryIcon`
};

const StyledSelect = styled(Select)(({ customTheme }) => ({
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
	[`& .${classes.whiteIcon}`]: {
		color: "white",
	},
	[`& .${classes.primaryIcon}`]: {
		color: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
	}
}));

export const PrimaryBackgroundDropdown = ({
	id = "primary-background-dropdown",
	disabled = false,
	className = "",
	placeholder = "Placeholder",
	showPlaceholder = true,
	width = "150px",
	height = "40px",
	items = [],
	value,
	customTheme,
	onChange,
}) => (
	<StyledSelect
		key={id}
		id={id}
		value={value}
		disabled={disabled}
		displayEmpty={showPlaceholder}
		className={`${className} ${classes.primaryBackground}`}
		style={{ ...(width && { width }), ...(height && { height }), fontFamily: "inherit" }}
		classes={{
			icon: classes.whiteIcon,
		}}
		autoWidth={!width}
		renderValue={(selected) => (selected || placeholder)}
		customTheme={customTheme}
		onChange={onChange}
	>
		{items.map((it) => (
			<MenuItem key={it.text} value={it.value} style={{ fontFamily: "inherit" }}>{it.text}</MenuItem>
		))}
	</StyledSelect>
);

export const PrimaryBorderDropdown = ({
	id = "primary-border-dropdown",
	disabled = false,
	className = "",
	placeholder = "Placeholder",
	showPlaceholder = true,
	width = "150px",
	height = "40px",
	items = [],
	value,
	customTheme,
	onChange,
}) => (
	<StyledSelect
		key={id}
		id={id}
		value={value}
		disabled={disabled}
		displayEmpty={showPlaceholder}
		className={`${className} ${classes.primaryBorder}`}
		style={{ ...(width && { width }), ...(height && { height }), fontFamily: "inherit" }}
		classes={{
			icon: classes.primaryIcon,
		}}
		autoWidth={!width}
		renderValue={(selected) => (selected || placeholder)}
		customTheme={customTheme}
		onChange={onChange}
	>
		{items.map((it) => (
			<MenuItem key={it.text} value={it.value} style={{ fontFamily: "inherit" }}>{it.text}</MenuItem>
		))}
	</StyledSelect>
);
