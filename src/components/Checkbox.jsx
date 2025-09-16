import { Checkbox as MUICheckbox, styled } from "@mui/material";

import theme from "../theme.js";

const PREFIX = "TCTT-Checkbox";

const classes = {
	primaryBackground: `${PREFIX}-primaryBackground`,
	secondaryBackground: `${PREFIX}-secondaryBackground`,
	thirdBackground: `${PREFIX}-thirdBackground`,
};

const StyledCheckbox = styled(MUICheckbox)(({ customTheme }) => ({
	[`&.${classes.primaryBackground}.Mui-checked`]: {
		color: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
		"&:hover": {
			color: customTheme?.palette?.primary?.dark || theme?.palette?.primary?.dark || "",
		},
	},
	[`&.${classes.secondaryBackground}.Mui-checked`]: {
		color: customTheme?.palette?.secondary?.main || theme?.palette?.secondary?.main || "",
		"&:hover": {
			color: customTheme?.palette?.secondary?.dark || theme?.palette?.secondary?.dark || "",
		},
	},
	[`&.${classes.thirdBackground}.Mui-checked`]: {
		color: customTheme?.palette?.third?.main || theme?.palette?.third?.main || "",
		"&:hover": {
			color: customTheme?.palette?.third?.dark || theme?.palette?.third?.dark || "",
		},
	},
}));

export const PrimaryCheckbox = ({
	id = "primary-checkbox",
	checked = false,
	onChange,
	size = "medium",
	icon,
	checkedIcon,
	customTheme,
	disabled = false,
}) => (
	<StyledCheckbox
		key={id}
		id={id}
		checked={checked}
		size={size}
		icon={icon}
		checkedIcon={checkedIcon}
		disabled={disabled}
		onChange={onChange}
		customTheme={customTheme}
		classes={{
			root: classes.primaryBackground,
		}}
	/>
);
