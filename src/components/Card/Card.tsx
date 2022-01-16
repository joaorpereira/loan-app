import React from "react";
import Button from "components/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Card, makeStyles, Theme } from "@material-ui/core";

const CardComponent = () => {
	const classes = useStyles();
	return (
		<Card elevation={1} className={classes.card}>
			<div className={classes.headerWrapper}>
				<p className={classes.paragraph}>Santander Consumer USA</p>
				<p className={classes.paragraph}>$409/month</p>
			</div>
			<div className={classes.divider} />
			<div className={classes.container}>
				<img className={classes.image} src={""} alt="" />
				<div className={classes.informationWrapper}>
					<p className={classes.informationText}>
						<b>2017 Toyota Prius ||</b>
					</p>
					<p className={`${classes.text} ${classes.margin}`}>
						estimated <b>65,000 mi</b>
					</p>
				</div>
				<MoreVertIcon />
			</div>
			<div className={classes.divider} />
			<div className={classes.contentWrapper}>
				<div className={classes.content}>
					<p className={classes.text}>
						APR <span className={classes.value}>$2.49%</span>
					</p>
					<p className={`${classes.text} ${classes.borderTop}`}>
						Time remaining <span className={classes.value}>85 mo</span>
					</p>
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
		borderRadius: "8px"
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
		margin: 0
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
		objectFit: "cover"
	},
	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "20px"
	}
}));
