import React from "react";
import { Grid, makeStyles, Theme } from "@material-ui/core";
import Button from "components/Button";
import Header from "components/Header";
import Input from "components/Input";
import Select from "components/Select";

const LoanInformation = () => {
	const classes = useStyles();
	return (
		<section>
			<Header title="Loan Information" />
			<Grid
				className={classes.container}
				container
				spacing={3}
				justifyContent="center"
			>
				<Grid item xs={12} md={12} lg={12}>
					<Select
						required
						fullWidth
						label="Loan purpose"
						options={[
							{ value: "Debt Consolidation", label: "Debt Consolidation" },
							{ value: "Personal", label: "Personal" },
							{ value: "API error", label: "API error" }
						]}
					/>
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<Input required fullWidth label="Total loan amount" />
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<Select
						required
						fullWidth
						label="Loan term (months)"
						options={[
							{ value: "12", label: "12 months" },
							{ value: "24", label: "24 months" },
							{ value: "36", label: "36 months" },
							{ value: "48", label: "48 months" }
						]}
					/>
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
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
				<Grid item xs={12} md={12} lg={12}>
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
		</section>
	);
};

export default LoanInformation;

const useStyles = makeStyles<Theme>((theme) => ({
	container: {
		padding: "40px 35px",
		margin: "0",
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "700px",
			margin: "0 auto"
		}
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
