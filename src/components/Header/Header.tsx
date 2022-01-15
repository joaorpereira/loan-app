import React from "react";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export type HeaderProps = {
	title: string;
};

const Header = ({ title }: HeaderProps) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h2 className={classes.title}>{title}</h2>
		</div>
	);
};

export default Header;

const useStyles = makeStyles<Theme>((theme) => ({
	root: {
		height: "72px",
		backgroundColor: theme.palette.primary.main,
		color: "#fff",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	title: {
		letterSpacing: "1px",
		fontSize: "24px"
	}
}));
