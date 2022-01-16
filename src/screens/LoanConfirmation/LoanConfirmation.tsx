import React from "react";
import SavingsImage from "assets/savings.png";
import HeaderSuccess from "components/HeaderSuccess";
import { makeStyles } from "@material-ui/core";

const LoanConfirmation = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			<HeaderSuccess />
			<div className={classes.container}>
				<div className={classes.button}>
					<img
						className={classes.image}
						src={SavingsImage}
						alt="Savings dolar white color image"
					/>
					Savings Available
				</div>
				<h2 className={classes.text}>You could be saving money</h2>
				<p className={classes.text}>on your existing loans</p>
			</div>
		</section>
	);
};

export default LoanConfirmation;

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: "#f2f2f2",
		height: "100vh"
	},
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	button: {
		backgroundColor: "#ffc941",
		width: "12rem",
		color: "#fff",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "2.1rem",
		margin: "1.5rem auto",
		borderRadius: "20rem",
		textTransform: "uppercase"
	},
	image: {
		marginRight: "5px"
	},
	text: {
		fontSize: "1.3rem",
		margin: 0
	}
}));
