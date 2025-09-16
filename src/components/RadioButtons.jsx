import { FormControlLabel, Radio, RadioGroup, styled } from "@mui/material";

import theme from "../theme.js";

const PREFIX = "TCTT-RadioButtons";

const classes = {
	primary: `${PREFIX}-primary`,
	secondary: `${PREFIX}-secondary`,
	third: `${PREFIX}-third`,
};

const StyledRadioGroup = styled(RadioGroup)(({
	customTheme,
}) => ({
	[`&.${classes.primary}`]: {
		fontFamily: "inherit",
	},
	[`&.${classes.primary} .Mui-checked`]: {
		color: `${customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || ""} !important`,
	},
	[`&.${classes.primary} .MuiTypography-root`]: {
		fontFamily: "inherit",
	},
	[`&.${classes.secondary}`]: {
		fontFamily: "inherit",
	},
	[`&.${classes.secondary} .Mui-checked`]: {
		color: `${customTheme?.palette?.secondary?.main || theme?.palette?.secondary?.main || ""} !important`,
	},
	[`&.${classes.secondary} .MuiTypography-root`]: {
		fontFamily: "inherit",
	},
	[`&.${classes.third}`]: {
		fontFamily: "inherit",
	},
	[`&.${classes.third} .Mui-checked`]: {
		color: `${customTheme?.palette?.third?.main || theme?.palette?.third?.main || ""} !important`,
	},
	[`&.${classes.third} .MuiTypography-root`]: {
		fontFamily: "inherit",
	},
}));

export const PrimaryRadioButtons = ({
	id = "primary-radio-buttons",
	value = "",
	onChange,
	row = false,
	size = "medium",
	labelPlacement = "end",
	disabled = false,
	items = [],
	customTheme,
}) => (
	<StyledRadioGroup
		value={value}
		name={id}
		row={row}
		onChange={onChange}
		customTheme={customTheme}
		className={classes.primary}
	>
		{items.map((it) => (
			<FormControlLabel
				key={it.value}
				value={it.value}
				control={(
					<Radio size={size} />
				)}
				label={it.label}
				labelPlacement={labelPlacement}
				disabled={disabled || it.disabled}
			/>
		))}
	</StyledRadioGroup>
);
