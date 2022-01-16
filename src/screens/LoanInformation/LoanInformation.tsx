import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "store/store";
import api from "services/api";

import Button from "components/Button";
import Header from "components/Header";
import Input from "components/Input";
import Select from "components/Select";

import { Grid, makeStyles, Theme } from "@material-ui/core";
import { amountFormatter, formatter } from "helpers/formatCurrency";

export type ContentProps = {
	apr: number;
	id: string;
	monthlyPayments: number;
};

const LoanInformation = () => {
	const classes = useStyles();
	const { setOfferId } = useStore();
	const navigate = useNavigate();

	const [loanPurpose, setLoanPurpose] = useState("");
	const [amount, setAmount] = useState("");
	const [terms, setTerms] = useState("");
	const [error, setError] = useState("");
	const [content, setContent] = useState<ContentProps | null>(null);

	const handleLoanPurpose = (
		e: React.ChangeEvent<{
			name?: string | undefined;
			value: unknown;
		}>
	) => {
		setLoanPurpose(e.target.value as string);
	};

	const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = ("$" + formatter(e.target.value)) as string;
		setAmount(newValue);
	};

	const handleTerms = (
		e: React.ChangeEvent<{
			name?: string | undefined;
			value: unknown;
		}>
	) => {
		setTerms(e.target.value as string);
	};

	const handleContent = useCallback(async () => {
		try {
			const res = await api.post("/offers", {
				loanPurpose,
				amount: amountFormatter(amount),
				terms: Number(terms)
			});
			setContent(res.data);
		} catch (err: any) {
			setError(err.message);
		}
	}, [loanPurpose, amount, terms]);

	useEffect(() => {
		if (loanPurpose && amount && terms) {
			handleContent();
		}
	}, [loanPurpose, amount, terms, handleContent]);

	useEffect(() => {
		if (!content) {
			setOfferId("");
		}
	}, [content, setOfferId]);

	useEffect(() => {
		if (loanPurpose || amount || terms) {
			setError("");
		}
	}, [loanPurpose, amount, terms]);

	const handleSubmitLoan = async () => {
		try {
			if (!loanPurpose || !amount || !terms) {
				throw new Error("Please review your fields");
			}
			const res = await api.post("/submissions", {
				loanPurpose,
				amount: amountFormatter(amount),
				terms: Number(terms),
				offerId: content?.id
			});
			const id = res.data.userId as string;
			setOfferId(id);
			navigate("/confirmation");
		} catch (err: any) {
			let message = err.message as string;
			if (message === "Request failed with status code 500") {
				message = "Something went wrong. Please review you fields";
			}
			setError(message);
		}
	};

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
						value={loanPurpose}
						onChange={handleLoanPurpose}
						options={[
							{ value: "Debt Consolidation", label: "Debt Consolidation" },
							{ value: "Personal", label: "Personal" },
							{ value: "API error", label: "API error" }
						]}
					/>
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<Input
						required
						fullWidth
						value={amount}
						onChange={handleAmount}
						label="Total loan amount"
					/>
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<Select
						required
						fullWidth
						label="Loan term (months)"
						value={terms}
						onChange={handleTerms}
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
							<span className={classes.value}>${content?.monthlyPayments}</span>
						</p>
						<p className={classes.text}>
							APR <span className={classes.value}>{content?.apr}%</span>
						</p>
						{!!error && <p className={classes.error}>{error}</p>}
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
					<Button
						fullWidth
						height="56px"
						borderRadius="50px"
						onClick={handleSubmitLoan}
					>
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
		height: "100px"
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
	},
	error: {
		textAlign: "center",
		color: "red",
		margin: 0
	}
}));
