import React from "react";
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	makeStyles
} from "@material-ui/core";

export type OptionsProps = {
	label: string | number;
	value: string | number;
};

export type SelectProps = {
	label: string;
	value?: string | number;
	fullWidth?: boolean;
	required?: boolean;
	variant?: "outlined" | "standard" | "filled";
	onChange?: (
		event: React.ChangeEvent<{
			name?: string | undefined;
			value: unknown;
		}>,
		child: React.ReactNode
	) => void;
	options: OptionsProps[];
};

const SelectComponent = ({
	label,
	value,
	fullWidth = false,
	variant = "outlined",
	onChange,
	required = false,
	options
}: SelectProps) => {
	const classes = useStyles();
	return (
		<FormControl
			className={classes.root}
			variant={variant}
			required={required}
			fullWidth={fullWidth}
		>
			<InputLabel id="select-label">{label}</InputLabel>
			<Select
				labelId="select-label"
				id="select"
				value={value}
				label={label}
				onChange={onChange}
				inputProps={{ "aria-label": label }}
			>
				{options.map((item) => (
					<MenuItem key={item.label} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SelectComponent;

const useStyles = makeStyles(() => ({
	root: {
		minWidth: "248px"
	}
}));
