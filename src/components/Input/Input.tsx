import React from "react";
import TextField from "@material-ui/core/TextField";

export type InputProps = {
	label: string;
	value?: string | number;
	fullWidth?: boolean;
	required?: boolean;
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
	onChange,
	required = false
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
			required={required}
		/>
	);
};

export default Input;
