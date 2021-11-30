import React, { useState } from "react";

// Material-UI imports
import { Collapse, makeStyles, Typography, useTheme } from "@material-ui/core";
// Icons
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

// Components
import Flippy, { FrontSide, BackSide } from "react-flippy";
import IF from "../../common-components/util/IF";
import QuestionActions from "./QuestionActions";
import QuestionAnswersList from "./QuestionAnswersList";

// styles
const useStyles = makeStyles((theme) => ({
	questionTitle: {
		marginBottom: 5,
	},
	resultSide: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	collapseIcon: {
		position: "absolute",
		left: 10,
		bottom: -15,
		width: 30,
		height: 30,
		borderRadius: 50,
		background: "#10101094",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
	},
}));

// the purpose prop is for determining if the question is gonna be showed in public or in the localStorage(Archived Questions)
export const Question = React.memo(
	({ question, increaseCorrectAnswers, purpose = "public" }) => {
		const classes = useStyles();
		const darkMode = useTheme().palette.type == "dark";

		// Destructuring through question
		const { question: body, correctAnswer } = question;

		// State vars
		const [flipped, setFlipped] = useState(false);
		const [result, setResult] = useState("");
		const [collapsed, setCollapsed] = useState(false);

		// handle dis/collapse answers
		const handleCollapseAnswers = () => {
			setCollapsed((prev) => !prev);
		};

		return (
			<Flippy
				isFlipped={flipped}
				flipOnClick={false}
				style={{
					border: darkMode && "1px solid rgb(255 255 255 / 13%)",
					borderRadius: 10,
				}}
			>
				<FrontSide
					style={{
						backgroundColor: "#10101094",
						borderRadius: 10,
					}}
				>
					{/* Question title */}
					<Typography className={classes.questionTitle}>{body}</Typography>

					{/* Question answers as radios */}
					<Collapse in={collapsed}>
						{purpose == "public" ? (
							<QuestionAnswersList
								question={question}
								increaseCorrectAnswers={increaseCorrectAnswers}
								setFlipped={setFlipped}
								setResult={setResult}
							/>
						) : (
							<Typography>
								Correct Answer:{" "}
								<Typography display="inline" color="error">
									{correctAnswer}
								</Typography>
							</Typography>
						)}

						{/* archive questions */}
						<QuestionActions question={question} />
					</Collapse>

					<div className={classes.collapseIcon}>
						<IF
							condition={collapsed}
							elseChildren={
								<ArrowDownward
									color={"primary"}
									onClick={handleCollapseAnswers}
								/>
							}
						>
							<ArrowUpward color={"primary"} onClick={handleCollapseAnswers} />
						</IF>
					</div>
				</FrontSide>
				<BackSide className={classes.resultSide}>
					<Typography color={result == "Wrong" ? "error" : "primary"}>
						You're {result}
					</Typography>
				</BackSide>
			</Flippy>
		);
	},
	(prevProps, nextProps) => {
		if (prevProps.question == nextProps.question) return true;

		return false;
	}
);
