import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

// Material-UI imports
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core";
// Icons
import {} from "@material-ui/icons";

// Contexts
import ArchivedQuestionsProvider from "../contexts/ArchivedQuestions";

// Hooks
import useWindowWidth from "../common-components/hooks/useWindowWidth";

// Components
import QuizForYou from "./QuizForYou";
import ArchivedQuestions from "../pages/archived-questions/ArchivedQuestions";
import Header from "./header/Header";
import SuggestCategory from "../pages/suggest-category/SuggestCategory";

// info
import { getCoverBasedOnCategory, SAVED_QUESTIONS } from "../helpers/info";

// Styles - normalize
import "normalize.css";
import "../styles/dist/main.min.css";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		minHeight: "100vh",
		position: "relative",
		boxSizing: "border-box",
	},
	overlay: {
		position: "absolute",
		height: "100%",
		width: "100%",
		backgroundColor: "rgba(0,0,0,.4)",
		zIndex: 2,
	},
}));

export default function App(props) {
	const classes = useStyles();

	// Import category to set the background of it based on the current category
	const { category } = useSelector((state) => state.quiz);

	// get the window width from that hook
	const { windowWidth } = useWindowWidth();

	const [darkMode, setDarkMode] = useState(true);

	const theme = createMuiTheme({
		palette: {
			type: darkMode ? "dark" : "light",
			primary: {
				main: "rgb(251 198 40)",
			},
		},
		typography: {
			fontFamily: "Poppins",
		},
	});

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const mainStyles = {
		backgroundColor: darkMode ? "rgb(12 11 11)" : "#fff",
		color: "#fff",
		backgroundImage: `url(${getCoverBasedOnCategory(category)})`,
		backgroundSize: windowWidth < 600 ? "auto" : "cover",
		backgroundRepeat: windowWidth < 600 ? "repeat" : "no-repeat",
		backgroundPosition: "center",
	};

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.wrapper} style={mainStyles}>
				{/* Overlay */}
				<div className={classes.overlay}></div>

				<ArchivedQuestionsProvider>
					<Header toggleDarkMode={toggleDarkMode} />
					<Switch>
						<Route path="/" exact>
							<QuizForYou toggleDarkMode={toggleDarkMode} />
						</Route>
						<Route path="/saved-questions">
							<ArchivedQuestions />
						</Route>
						<Route path="/suggest-category">
							<SuggestCategory />
						</Route>
					</Switch>
				</ArchivedQuestionsProvider>
			</div>
		</ThemeProvider>
	);
}
