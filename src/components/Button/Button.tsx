import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export type ButtonProps = {
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	variant?: "outlined" | "text" | "contained";
	fullWidth?: boolean;
	color?: "inherit" | "primary" | "secondary" | "default";
	height?: string;
	borderRadius?: string;
};

const ButtonComponent = ({
	children,
	variant = "contained",
	onClick,
	fullWidth = false,
	color = "primary",
	height,
	borderRadius
}: ButtonProps) => {
	const classes = useStyles({ height, borderRadius });
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

const useStyles = makeStyles<
	Theme,
	Pick<ButtonProps, "height" | "borderRadius">
>(() => ({
	root: {
		boxShadow: "none",
		height: ({ height }) => height,
		borderRadius: ({ borderRadius }) => borderRadius
	}
}));
