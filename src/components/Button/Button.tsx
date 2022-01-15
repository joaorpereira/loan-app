import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

export type ButtonProps = {
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	variant?: "outlined" | "text" | "contained";
	fullWidth?: boolean;
	color?: "inherit" | "primary" | "secondary" | "default";
};

const ButtonComponent = ({
	children,
	variant = "contained",
	onClick,
	fullWidth = false,
	color = "primary"
}: ButtonProps) => {
	const classes = useStyles();
	return (
		<Button
			className={classes.root}
			color={color}
			fullWidth={fullWidth}
			variant={variant}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};

export default ButtonComponent;

const useStyles = makeStyles(() => ({
	root: {
		textTransform: "none",
		boxShadow: "none"
	}
}));
