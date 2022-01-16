import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "store/store";
import api from "services/api";

import Card from "components/Card";
import HeaderSuccess from "components/HeaderSuccess";

import SavingsImage from "assets/savings.png";
import { Grid, makeStyles } from "@material-ui/core";

type AutomobileProps = {
	estimatedListPrice: null;
	id: string;
	imageSource: string;
	isRefinanceable: boolean;
	make: string;
	mileage: number;
	model: string;
	registrationDate: string;
	state: null;
	trim: null;
	vin: string;
	year: string;
};

export type LoansAvailableProps = {
	apr: string;
	automobile: AutomobileProps;
	balance: number;
	id: string;
	issueDate: string;
	lender: string;
	monthlyPayments: number;
	originalAmount: number;
	originalMonths: number;
	remainingMonths: number;
};

const LoanConfirmation = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const { offerId } = useStore();

	const [error, setError] = useState("");
	const [loansAvailable, setLoansAvailable] = useState<LoansAvailableProps[]>(
		[]
	);

	const getLoans = useCallback(async () => {
		try {
			const res = await api.get(`/loans?userId=${offerId}`);
			setLoansAvailable(res.data.loansAvailable);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			setError(err.message);
		}
	}, [offerId]);

	useEffect(() => {
		if (offerId) {
			getLoans();
		} else {
			navigate("/");
		}
	}, [offerId, getLoans, navigate]);

	return (
		<section className={classes.root}>
			{error ? (
				<p className={classes.error}>{error}</p>
			) : (
				<>
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
					<div className={classes.cardWrapper}>
						<Grid container spacing={2}>
							{loansAvailable.map((item) => (
								<Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
									<Card data={item} />
								</Grid>
							))}
						</Grid>
					</div>
				</>
			)}
		</section>
	);
};

export default LoanConfirmation;

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: "#f2f2f2",
		height: "100%"
	},
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	cardWrapper: {
		padding: "40px 35px"
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
	},
	error: {
		textAlign: "center",
		color: "red",
		margin: 0
	}
}));
