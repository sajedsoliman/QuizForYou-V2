import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

// Material-UI imports 
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core'
// Icons
import { } from '@material-ui/icons'

// Contexts
import ArchivedQuestionsProvider from '../contexts/ArchivedQuestions';

// Hooks

// Components
import QuizForYou from './QuizForYou';
import ArchivedQuestions from '../pages/archived-questions/ArchivedQuestions'
import Header from './header/Header';

// info
import { SAVED_QUESTIONS } from '../helpers/info';

// Styles - normalize
import 'normalize.css';
import '../styles/dist/main.min.css'

const useStyles = makeStyles(theme => ({
    wrapper: {
        minHeight: "100vh",
        paddingTop: 80,
        paddingBottom: 40
    }
}))



export default function App(props) {
    const classes = useStyles()

    const [darkMode, setDarkMode] = useState(false)

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light"
        },
        typography: {
            fontFamily: "Poppins"
        }
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const mainStyles = {
        backgroundColor: darkMode ? "rgb(12 11 11)" : "#fff",
        color: darkMode ? "#fff" : "rgb(12 11 11)"
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.wrapper} style={mainStyles}>
                <ArchivedQuestionsProvider>
                    <Header toggleDarkMode={toggleDarkMode} />
                    <Switch>
                        <Route path="/" exact>
                            <QuizForYou toggleDarkMode={toggleDarkMode} />
                        </Route>
                        <Route path="/saved-questions">
                            <ArchivedQuestions />
                        </Route>
                    </Switch>
                </ArchivedQuestionsProvider>
            </div>
        </ThemeProvider >
    )
}