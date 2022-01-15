import React from "react";
import { Grid, makeStyles, Theme } from "@material-ui/core";
import Button from "components/Button";
import Header from "components/Header";
import Input from "components/Input";

const LoanInformation = () => {
	const classes = useStyles();
	return (
		<div>
			<Header title="Loan Information" />
			<Grid
				className={classes.container}
				container
				spacing={3}
				justifyContent="center"
			>
				<Grid item xs={12} md={6} lg={6}>
					<Input required fullWidth label="Loan purpose" />
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<Input required fullWidth label="Total loan amount" />
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<Input required fullWidth label="Loan term (months)" />
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<div className={classes.content}>
						<p className={classes.text}>
							Monthly payment
							<span className={classes.value}>$85</span>
						</p>
						<p className={classes.text}>
							APR <span className={classes.value}>$2.49%</span>
						</p>
					</div>
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<p className={classes.paragraph}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry standard dummy text ever
						since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived.
					</p>
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<Button fullWidth height="56px" borderRadius="50px">
						Submit Application
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default LoanInformation;

const useStyles = makeStyles<Theme>((theme) => ({
	container: {
		padding: "40px 35px",
		margin: "0",
		width: "100%"
	},
	paragraph: {
		textAlign: "justify",
		color: theme.palette.secondary.main,
		lineHeight: "20px",
		fontSize: ".9rem"
	},
	content: {
		height: "80px"
	},
	value: {
		float: "right",
		color: "black",
		fontWeight: "bold"
	},
	text: {
		borderTop: `1px solid ${theme.palette.secondary.main}30`,
		paddingTop: "10px",
		color: theme.palette.secondary.main,
		fontSize: ".9rem"
	}
}));
