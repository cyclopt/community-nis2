import { Slider as MUISlider, Stack, styled } from "@mui/material";

import theme from "../theme.js";

const PREFIX = "TCTT-Sliders";

const classes = {
	markLabel: `${PREFIX}-markLabel`,
	primary: `${PREFIX}-primary`,
	secondary: `${PREFIX}-secondary`,
	third: `${PREFIX}-third`,
};

const StyledSlider = styled(MUISlider)(({
	customTheme,
}) => ({
	[`&.${classes.primary}`]: {
		color: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
	},
	[`&.${classes.primary} .Mui-checked`]: {
		color: "inherit",
	},
	[`&.${classes.primary} .MuiSlider-track`]: {
		backgroundColor: `${customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || ""} !important`,
	},
	[`&.${classes.secondary}`]: {
		color: customTheme?.palette?.secondary?.main || theme?.palette?.secondary?.main || "",
	},
	[`&.${classes.secondary} .Mui-checked`]: {
		color: "inherit",
	},
	[`&.${classes.secondary} .MuiSlider-track`]: {
		backgroundColor: `${customTheme?.palette?.secondary?.main || theme?.palette?.secondary?.main || ""} !important`,
	},
	[`&.${classes.third}`]: {
		color: customTheme?.palette?.third?.main || theme?.palette?.third?.main || "",
	},
	[`&.${classes.third} .Mui-checked`]: {
		color: "inherit",
	},
	[`&.${classes.third} .MuiSlider-track`]: {
		backgroundColor: `${customTheme?.palette?.third?.main || theme?.palette?.third?.main || ""} !important`,
	},
}));

const StyledStack = styled(Stack)(() => ({
	[`& .${classes.markLabel}`]: {
		color: "white",
	}
}));

export const PrimarySlider = ({
	id = "primary-slider",
	value,
	onChange,
	min = 0,
	max = 100,
	marks,
	step,
	size = "medium",
	track,
	displayLabel,
	iconBefore,
	iconAfter,
	customTheme,
}) => (
	<StyledStack key={id} spacing={2} direction="row" sx={{ mb: 1, width: "100%" }} alignItems="center">
		{iconBefore}
		<StyledSlider
			value={value}
			min={min}
			max={max}
			marks={marks}
			step={step === null ? null : step || 1}
			size={size || "medium"} // small, medium
			track={track} // normal, false, inverted
			valueLabelDisplay={displayLabel || "auto"} // on, off, auto
			classes={{
				markLabel: classes.markLabel,
			}}
			customTheme={customTheme}
			className={classes.primary}
			onChange={onChange}
		/>
		{iconAfter}
	</StyledStack>
);
