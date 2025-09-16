import { useEffect, useState } from "react";
import { TimePicker, DateTimePicker, DesktopDatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { styled } from "@mui/material";

import Input from "./Input.jsx";
import theme from "../theme.js";

const PREFIX = "TCTT-DatePicker";

const classes = {
	primaryBackground: `${PREFIX}-primaryBackground`,
	primaryBorder: `${PREFIX}-primaryBorder`,
};

const StyledPicker = styled("div")(({ customTheme }) => ({
	[`& .${classes.primaryBackground}`]: {
		color: "white",
		backgroundColor: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
		border: `2px solid ${customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || ""}`,
		borderRadius: customTheme?.shape?.borderRadius || theme?.shape?.borderRadius || "5px",
		height: "40px!important",
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
	[`& .${classes.primaryBorder}`]: {
		color: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
		backgroundColor: "transparent",
		border: `2px solid ${customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || ""}`,
		borderRadius: customTheme?.shape?.borderRadius || theme?.shape?.borderRadius || "5px",
		height: "40px!important",
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
	["& .MuiPickersOutlinedInput-notchedOutline"]: {
		border: "0px!important",
		"&:hover": {
			border: "0px!important",
		},
		"&.Mui-focused": {
			border: "0px!important",
		},
	},
}));

const calculateFormat = (views, type) => {
	switch (type) {
	case "desktop":
	case "mobile": {
		if (views.includes("year") && views.includes("month") && views.includes("day")) return "DD/MM/YYYY";
		if (views.includes("year") && views.includes("month")) return "MM/YYYY";
		if (views.includes("month") && views.includes("day")) return "DD/MM";
		if (views.includes("year")) return "YYYY";
		if (views.includes("month")) return "MM";
		if (views.includes("day")) return "DD";
		break;
	}
	case "time": {
		if (views.includes("hours") && views.includes("minutes") && views.includes("seconds")) return "HH:mm:ss";
		if (views.includes("hours") && views.includes("minutes")) return "HH:mm";
		if (views.includes("minutes") && views.includes("seconds")) return "mm:ss";
		if (views.includes("hours")) return "HH";
		if (views.includes("minutes")) return "mm";
		if (views.includes("seconds")) return "ss";
		break;
	}
	case "datetime": {
		if (views.includes("seconds")) return "DD/MM/YYYY HH:mm:ss";
		return "DD/MM/YYYY HH:mm";
	}
	default: {
		return "DD/MM/YYYY";
	}
	}
};

const PrimaryBorderDatepicker = ({
	id = "primary-border-date-picker",
	type = "desktop", // desktop, mobile, time, datetime
	value = null,
	onChange,
	disabled = false,
	label = "Date",
	views = (type === "time")
		? ["hours", "minutes"]
		: (type === "datetime")
			? ["day", "hours", "minutes"]
			: ["day"],
	displayViews = (type === "time")
		? ["hours", "minutes"]
		: (type === "datetime")
			? ["day", "month", "year", "hours", "minutes"]
			: ["day", "month", "year"],
	width = "200px",
	customTheme,
}) => {
	const [customValue, setCustomValue] = useState(value);

	const handleChange = (newValue) => {
		if (onChange) onChange(newValue);
	};

	useEffect(() => {
		setCustomValue(value);
	}, [value]);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<StyledPicker id={id} customTheme={customTheme}>
				{type === "desktop" && (
					<DesktopDatePicker
						className={classes.primaryBorder}
						views={views}
						disabled={disabled}
						label={label}
						format={calculateFormat(displayViews, type)}
						value={customValue}
						textField={(params) => <Input {...params} fontFamily="inherit" />}
						slotProps={{ textField: { size: 'small' } }}
						sx={{
							...(width && { width }),
							fontSize: "12px",
							fontFamily: "inherit",
							"& .MuiPickersInputBase-root": {
								color: "inherit",
								fontFamily: "inherit",
							},
						}}
						onChange={handleChange}
					/>
				)}
				{type === "mobile" && (
					<MobileDatePicker
						className={classes.primaryBorder}
						views={views}
						disabled={disabled}
						label={label}
						format={calculateFormat(displayViews, type)}
						value={customValue}
						textField={(params) => <Input {...params} fontFamily="inherit" />}
						slotProps={{ textField: { size: 'small' } }}
						sx={{
							...(width && { width }),
							fontSize: "12px",
							fontFamily: "inherit",
							"& .MuiPickersInputBase-root": {
								color: "inherit",
								fontFamily: "inherit",
							},
						}}
						onChange={handleChange}
					/>
				)}
				{type === "time" && (
					<TimePicker
						className={classes.primaryBorder}
						views={views}
						disabled={disabled}
						label={label}
						ampm={false}
						format={calculateFormat(displayViews, type)}
						value={customValue}
						textField={(params) => <Input {...params} fontFamily="inherit" />}
						slotProps={{ textField: { size: 'small' } }}
						sx={{
							...(width && { width }),
							fontSize: "12px",
							fontFamily: "inherit",
							"& .MuiPickersInputBase-root": {
								color: "inherit",
								fontFamily: "inherit",
							},
						}}
						onChange={handleChange}
					/>
				)}
				{type === "datetime" && (
					<DateTimePicker
						className={classes.primaryBorder}
						views={views}
						disabled={disabled}
						label={label}
						ampm={false}
						format={calculateFormat(displayViews, type)}
						value={customValue}
						textField={(params) => <Input {...params} fontFamily="inherit" />}
						slotProps={{ textField: { size: 'small' } }}
						sx={{
							...(width && { width }),
							fontSize: "12px",
							fontFamily: "inherit",
							"& .MuiPickersInputBase-root": {
								color: "inherit",
								fontFamily: "inherit",
							},
						}}
						onChange={handleChange}
					/>
				)}
			</StyledPicker>
		</LocalizationProvider>
	);
};

export { PrimaryBorderDatepicker };
