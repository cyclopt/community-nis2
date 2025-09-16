import { TextField } from "@mui/material";

const Input = ({
	id = "basic-form",
	label = "",
	required = false,
	helperText = "",
	error = false,
	multiline = false,
	minRows = 3,
	maxRows = 3,
	fullWidth = true,
	variant = "outlined",
	onChange = () => {},
	children = null,
	classes = {},
	...props
}) => (
	<TextField
		hiddenLabel={label === ""}
		id={id}
		label={label}
		required={required}
		helperText={helperText}
		error={error}
		multiline={multiline}
		minRows={minRows}
		maxRows={maxRows}
		fullWidth={fullWidth}
		variant={variant}
		classes={classes}
		size="small"
		sx={{
			fontFamily: "inherit",
			"& .MuiInputBase-root": { fontFamily: "inherit" },
			"& .MuiInputBase-input": { fontFamily: "inherit" },
			"& .MuiInputLabel-root": { fontFamily: "inherit" },
			"& .MuiFormHelperText-root": { fontFamily: "inherit" },
			"& .MuiOutlinedInput-notchedOutline": { fontFamily: "inherit" },
			...props.sx,
		}}
		onChange={onChange}
		{...props}
	>
		{children}
	</TextField>
);

export default Input;
