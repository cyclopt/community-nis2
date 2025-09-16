import { Switch as MUISwitch, styled } from "@mui/material";

import theme from "../theme.js";

const PREFIX = "TCTT-Switches";

const classes = {
	primary: `${PREFIX}-primary`,
	secondary: `${PREFIX}-secondary`,
	third: `${PREFIX}-third`,
};

const StyledSwitch = styled(MUISwitch)(({
	customTheme,
}) => ({
	[`&.${classes.primary}`]: {
		color: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
	},
	[`&.${classes.primary} .Mui-checked`]: {
		color: "inherit",
	},
	[`&.${classes.primary} .MuiSwitch-track`]: {
		backgroundColor: `${customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || ""} !important`,
	},
	[`&.${classes.secondary}`]: {
		color: customTheme?.palette?.secondary?.main || theme?.palette?.secondary?.main || "",
	},
	[`&.${classes.secondary} .Mui-checked`]: {
		color: "inherit",
	},
	[`&.${classes.secondary} .MuiSwitch-track`]: {
		backgroundColor: `${customTheme?.palette?.secondary?.main || theme?.palette?.secondary?.main || ""} !important`,
	},
	[`&.${classes.third}`]: {
		color: customTheme?.palette?.third?.main || theme?.palette?.third?.main || "",
	},
	[`&.${classes.third} .Mui-checked`]: {
		color: "inherit",
	},
	[`&.${classes.third} .MuiSwitch-track`]: {
		backgroundColor: `${customTheme?.palette?.third?.main || theme?.palette?.third?.main || ""} !important`,
	},
}));

export const PrimarySwitch = ({
	id = "primary-switch",
	checked = false,
	onChange,
	size = "medium",
	customTheme,
}) => (
	<StyledSwitch
		key={id}
		checked={checked}
		size={size || "medium"} // small, medium
		onChange={onChange}
		customTheme={customTheme}
		className={classes.primary}
	/>
);
