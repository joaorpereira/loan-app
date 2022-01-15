import React from "react";
import TextField from "@material-ui/core/TextField";

export type InputProps = {
	label: string;
	value?: string | number;
	fullWidth?: boolean;
	placeholder?: string;
	variant?: "outlined" | "standard" | "filled";
	onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const Input = ({
	label,
	value,
	fullWidth = false,
	placeholder = "",
	variant = "outlined",
	onChange
}: InputProps) => {
	return (
		<TextField
			aria-label={label}
			label={label}
			placeholder={placeholder}
			value={value}
			variant={variant}
			color="primary"
			fullWidth={fullWidth}
			onChange={onChange}
		/>
	);
};

export default Input;
