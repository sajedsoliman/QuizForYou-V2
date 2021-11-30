import React from "react";

// Material-UI imports
import { Card, Fade, makeStyles } from "@material-ui/core";
// Icons
import { ArrowDownward } from "@material-ui/icons";

// components
import clsx from "clsx";

// styles
import "./styles.css";
const useStyles = makeStyles((theme) => ({
	card: {
		position: "relative",
		borderRadius: 10,
		padding: 20,
		overflow: "visible",
		minHeight: 135,
	},
	questionTitle: {
		height: 25,
		borderBottom: "6px solid #d7d7d7e6",
		borderTop: "6px solid #d7d7d7e6",
		textAlign: "right",
		position: "relative",
		"& span": {
			position: "relative",

			top: 7,
			right: -12,
			transform: "translateY(20px)",
		},
	},
	label: {
		height: 7,
		width: 55,
		background: theme.palette.secondary.main,
		marginBottom: 15,
	},
	radioRow: {
		display: "flex",
		alignItems: "center",
		marginBottom: 10,
	},
	circle: {
		width: 15,
		height: 15,
		borderRadius: 50,
		boxShadow: "0 0 0 2px #fff, 0 0 0 3px #000",
	},
	radioLabel: {
		width: 45,
		height: 7,
		backgroundColor: "#666",
		marginLeft: 10,
	},
	collapseIcon: {
		position: "absolute",
		left: 10,
		bottom: -15,
		width: 30,
		height: 30,
		borderRadius: 50,
		background: "#303030",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));

export default function QuestionSkeleton(props) {
	const classes = useStyles();

	return (
		<Fade in={true}>
			<Card elevation={3} className={clsx(classes.card, "skeleton_card")}>
				{/* Question title - 2 lines */}
				<div className={classes.questionTitle}>
					<span>?</span>
				</div>

				<div className={classes.collapseIcon}>
					<ArrowDownward color="primary" />
				</div>
				{/* answers => title(Answers) and radios */}
				{/* <div className={classes.label}></div>
			<div className={classes.radioRow}>
				<span className={classes.circle}></span>
				<span className={classes.radioLabel}></span>
			</div>
			<div className={classes.radioRow}>
				<span className={classes.circle}></span>
				<span className={classes.radioLabel}></span>
			</div>
			<div className={classes.radioRow}>
				<span className={classes.circle}></span>
				<span className={classes.radioLabel}></span>
			</div>
			<div className={classes.radioRow}>
				<span className={classes.circle}></span>
				<span className={classes.radioLabel}></span>
			</div> */}
			</Card>
		</Fade>
	);
}
