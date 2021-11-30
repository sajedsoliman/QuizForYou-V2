import React from "react";

// Material-UI imports
import { Divider } from "@material-ui/core";
// Icons

// Components
import QuizControls from "./QuizControls";
import QuestionList from "./question/QuestionList";
import AppPage from "../pages/AppPage";

export default function QuizForYou() {
	return (
		<AppPage>
			{/* Quiz Controls => limit, category, difficulty */}
			<QuizControls />

			{/*  divider */}
			<Divider />

			{/* Question List of cards */}
			<QuestionList />
		</AppPage>
	);
}
