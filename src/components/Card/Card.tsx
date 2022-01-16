import React from "react";
import Button from "components/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Card, makeStyles, Theme } from "@material-ui/core";
import { LoansAvailableProps } from "screens/LoanConfirmation/LoanConfirmation";

export type CardProps = {
	data: LoansAvailableProps;
};

const CardComponent = ({ data }: CardProps) => {
	const classes = useStyles();

	const {
		lender,
		monthlyPayments,
		automobile,
		originalAmount,
		apr,
		remainingMonths
	} = data;
	return (
		<Card elevation={1} className={classes.card}>
			<div>
				<div className={classes.headerWrapper}>
					<p className={classes.paragraph}>{lender}</p>
					<p className={classes.paragraph}>${monthlyPayments}/month</p>
				</div>
				<div className={classes.divider} />
				<div className={classes.container}>
					<div className={classes.box}>
						<img
							className={classes.image}
							src={automobile.imageSource}
							alt={`${automobile.make} ${automobile.model} ${automobile.year}`}
						/>
						<div className={classes.informationWrapper}>
							<p className={classes.informationText}>
								<b>
									{automobile.year} {automobile.make.toLowerCase()}
									{automobile.model.toLowerCase()}
								</b>
							</p>
							<p className={`${classes.text} ${classes.margin}`}>
								estimated <b>{originalAmount} mi</b>
							</p>
						</div>
					</div>
					<MoreVertIcon />
				</div>
				<div className={classes.divider} />
				<div className={classes.contentWrapper}>
					<div className={classes.content}>
						<p className={classes.text}>
							APR <span className={classes.value}>{apr}%</span>
						</p>
						<p className={`${classes.text} ${classes.borderTop}`}>
							Time remaining
							<span className={classes.value}>{remainingMonths} mo</span>
						</p>
					</div>
				</div>
			</div>
			<div className={classes.buttonWrapper}>
				<Button fullWidth>Start Saving</Button>
			</div>
		</Card>
	);
};

export default CardComponent;

const useStyles = makeStyles<Theme>((theme) => ({
	card: {
		borderRadius: "8px",
		minHeight: "350px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
	paragraph: {
		textAlign: "center",
		margin: 0,
		fontSize: "1rem",
		letterSpacing: "1px"
	},
	value: {
		float: "right",
		color: "black",
		fontWeight: "bold"
	},
	text: {
		color: theme.palette.secondary.main,
		fontSize: ".9rem",
		margin: ".5rem 0"
	},
	informationText: {
		fontSize: ".9rem",
		margin: 0,
		textTransform: "capitalize"
	},
	borderTop: {
		paddingTop: "10px",
		borderTop: `1px solid ${theme.palette.secondary.main}30`
	},
	divider: {
		height: "1px",
		width: "100%",
		backgroundColor: `${theme.palette.secondary.main}30`
	},
	headerWrapper: {
		padding: "20px"
	},
	informationWrapper: {
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column"
	},
	contentWrapper: {
		padding: "5px 20px"
	},
	buttonWrapper: {
		padding: "20px 15px"
	},
	margin: {
		margin: 0
	},
	image: {
		height: "3rem",
		width: "3rem",
		borderRadius: "8px",
		objectFit: "cover",
		marginRight: "10px"
	},
	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "20px"
	},
	box: {
		display: "flex",
		alignItems: "center"
	}
}));
