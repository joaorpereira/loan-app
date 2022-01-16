import React from "react";
import CheckImage from "assets/check.png";
import { makeStyles, Theme } from "@material-ui/core";

const HeaderSuccess = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img
				className={classes.image}
				src={CheckImage}
				alt="Check image with white color"
			/>
			<h1 className={classes.title}>Thank you</h1>
			<p className={classes.paragraph}>
				A loan officer will reach out to you shortly. If you have any questions
				please reach us at (202) 555-0139.
			</p>
			<p className={`${classes.paragraph} ${classes.marginTop} `}>
				Want to speed up the process?
			</p>
		</div>
	);
};

export default HeaderSuccess;

const useStyles = makeStyles<Theme>((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		height: "420px",
		color: "#fff",
		padding: "2.8rem 2.2rem"
	},
	image: { height: "78px", width: "78px" },
	title: {
		fontSize: "2.4rem",
		marginTop: "0.5rem"
	},
	paragraph: {
		textAlign: "justify",
		fontSize: "1.2rem",
		lineHeight: "1.5rem",
		marginTop: "2rem"
	},
	marginTop: {
		marginTop: "2.5rem"
	},
	[theme.breakpoints.up("md")]: {
		root: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center"
		},
		paragraph: {
			maxWidth: "550px",
			textAlign: "center"
		}
	}
}));
