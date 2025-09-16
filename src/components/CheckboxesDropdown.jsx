import { useEffect, useRef, useState } from "react";
import { ListItemText, MenuItem, OutlinedInput, Select, styled } from "@mui/material";

import { PrimaryCheckbox } from "./Checkbox.jsx";
import theme from "../theme.js";

const PREFIX = "TCTT-CheckboxesDropdown";

const classes = {
	primaryBackground: `${PREFIX}-primaryBackground`,
	primaryBorder: `${PREFIX}-primaryBorder`,
	disabled: `${PREFIX}-disabled`,
	whiteIcon: `${PREFIX}-whiteIcon`,
	primaryIcon: `${PREFIX}-primaryIcon`
};

const StyledSelect = styled(Select)(({ fontSize, customTheme }) => ({
	[`&.${classes.primaryBackground}`]: {
		color: "white!important",
		backgroundColor: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
		border: `2px solid ${customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || ""}`,
		borderRadius: customTheme?.shape?.borderRadius || theme?.shape?.borderRadius || "5px",
		fontSize: `${fontSize}!important`,
		fontFamily: "inherit",
		"&:hover": {
			color: "white",
			backgroundColor: customTheme?.palette?.primary?.dark || theme?.palette?.primary?.dark || "",
			border: `2px solid ${customTheme?.palette?.primary?.dark || theme?.palette?.primary?.dark || ""}`,
		},
		"&:disabled": {
			color: "white",
			backgroundColor: customTheme?.palette?.grey?.dark || theme?.palette?.grey?.main || "",
			border: `2px solid ${customTheme?.palette?.grey?.dark || theme?.palette?.grey?.main || ""}`,
		},
	},
	[`&.${classes.primaryBorder}`]: {
		color: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
		backgroundColor: "transparent",
		border: `2px solid ${customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || ""}`,
		borderRadius: customTheme?.shape?.borderRadius || theme?.shape?.borderRadius || "5px",
		fontSize: `${fontSize}!important`,
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
	[`&.${classes.disabled}`]: {
		color: "white",
		backgroundColor: customTheme?.palette?.grey?.main || theme?.palette?.grey?.main || "",
		border: `2px solid ${customTheme?.palette?.grey?.main || theme?.palette?.grey?.main || ""}`,
		borderRadius: customTheme?.shape?.borderRadius || theme?.shape?.borderRadius || "5px",
		fontSize: (props) => `${props.fontSize}!important`,
		fontFamily: "inherit",
		cursor: "not-allowed",
	},
	[`& .${classes.whiteIcon}`]: {
		color: "white",
	},
	[`& .${classes.primaryIcon}`]: {
		color: customTheme?.palette?.primary?.main || theme?.palette?.primary?.main || "",
	}
}));

export const PrimaryBackgroundCheckboxesDropdown = ({
	id = "primary-background-checkboxes-dropdown",
	disabled = false,
	className = "",
	placeholder = "Placeholder",
	width = "300px",
	height = "40px",
	fontSize = "14px",
	options = [],
	value = [],
	customTheme,
	onChange = () => {},
}) => {
	const [inputWidth, setInputWidth] = useState(width);
	const inputRef = useRef();

	useEffect(() => {
		if (inputRef.current) {
			setInputWidth(inputRef.current.offsetWidth);
		}
	}, [inputRef.current, inputRef.current?.offsetWidth]);

	return (
		<StyledSelect
			multiple
			displayEmpty
			key={id}
			id={id}
			labelId="multiple-checkbox-label"
			disabled={disabled}
			value={value}
			fontSize={fontSize}
			input={<OutlinedInput ref={inputRef} style={{ textAlign: "left", fontFamily: "inherit" }} />}
			renderValue={(selected) => {
				if (selected.length === 0) {
					return <em style={{ fontFamily: "inherit" }}>{placeholder}</em>;
				}

				return selected.join(", ");
			}}
			className={`${className} ${disabled ? classes.disabled : classes.primaryBackground}`}
			MenuProps={{
				PaperProps: {
					style: {
						maxHeight: 250,
						width: inputWidth,
					},
				}
			}}
			classes={{
				icon: classes.whiteIcon,
			}}
			sx={{
				...(width && { width }),
				...(height && { height }),
				fontFamily: "inherit",
			}}
			customTheme={customTheme}
			onChange={(event) => onChange(event.target.value)}
		>
			{placeholder && (
				<MenuItem disabled value="">
					<em style={{ fontFamily: "inherit" }}>{placeholder}</em>
				</MenuItem>
			)}
			{options.map((option) => (
				<MenuItem key={option} value={option}>
					<PrimaryCheckbox
						checked={value && value.includes(option)}
						size="small"
						color="primary"
						sx={{
							color: "primary.main",
							"&.Mui-checked": {
								color: "primary.main",
							},
						}}
						disabled={disabled}
					/>
					<ListItemText key={option} primary={option} style={{ fontFamily: "inherit" }} />
				</MenuItem>
			))}
		</StyledSelect>
	);
};

export const PrimaryBorderCheckboxesDropdown = ({
	id = "primary-border-checkboxes-dropdown",
	disabled = false,
	className = "",
	placeholder = "Placeholder",
	width = "300px",
	height = "40px",
	fontSize = "14px",
	options = [],
	value = [],
	customTheme,
	onChange = () => {},
}) => {
	const [inputWidth, setInputWidth] = useState(width);
	const inputRef = useRef();

	useEffect(() => {
		if (inputRef.current) {
			setInputWidth(inputRef.current.offsetWidth);
		}
	}, [inputRef.current, inputRef.current?.offsetWidth]);

	return (
		<StyledSelect
			multiple
			displayEmpty
			key={id}
			id={id}
			labelId="multiple-checkbox-label"
			disabled={disabled}
			value={value}
			fontSize={fontSize}
			input={<OutlinedInput ref={inputRef} style={{ textAlign: "left" }} />}
			renderValue={(selected) => {
				if (selected.length === 0) {
					return <em>{placeholder}</em>;
				}

				return selected.join(", ");
			}}
			className={`${className} ${disabled ? classes.disabled : classes.primaryBorder}`}
			MenuProps={{
				PaperProps: {
					style: {
						maxHeight: 250,
						width: inputWidth,
					},
				}
			}}
			classes={{
				icon: classes.primaryIcon,
			}}
			sx={{
				...(width && { width }),
				...(height && { height }),
			}}
			customTheme={customTheme}
			onChange={(event) => onChange(event.target.value)}
		>
			{placeholder && (
				<MenuItem disabled value="">
					<em>{placeholder}</em>
				</MenuItem>
			)}
			{options.map((option) => (
				<MenuItem key={option} value={option}>
					<PrimaryCheckbox
						checked={value && value.includes(option)}
						size="small"
						color="primary"
						sx={{
							color: "primary.main",
							"&.Mui-checked": {
								color: "primary.main",
							},
						}}
						disabled={disabled}
					/>
					<ListItemText key={option} primary={option} />
				</MenuItem>
			))}
		</StyledSelect>
	);
};
