import React from "react";
import TextField from "@material-ui/core/TextField";

type InputProps = {
	label: string;
	value?: string | number;
	fullWidth?: boolean;
	placeholder?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const Input = ({
	label,
	value,
	fullWidth = false,
	placeholder = "",
	onChange
}: InputProps) => {
	return (
		<TextField
			aria-label={label}
			label={label}
			placeholder={placeholder}
			value={value}
			variant="outlined"
			color="primary"
			fullWidth={fullWidth}
			onChange={onChange}
		/>
	);
};

export default Input;
