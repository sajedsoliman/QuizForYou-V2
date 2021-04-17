import React, { useState, useEffect } from 'react'

// Redux
import { useSelector } from 'react-redux'

// Material-UI imports 
import { Link, makeStyles, Typography } from '@material-ui/core'
// Icons
import { } from '@material-ui/icons'

// Contexts

// Hooks

// Others
import { apiFetch } from '../../helpers/info'

// Components
import { Question } from './Question'
import QuestionSkeletonList from '../skeletons/QuestionSkeletonList'


// styles
const useStyles = makeStyles(theme => ({
    questionsGrid: {
        display: "grid",
        gridGap: "25px 10px",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto",
        gridAutoFlow: "row",
        paddingBottom: 20,
        [theme.breakpoints.up(700)]: {
            gridTemplateColumns: "1fr 1fr",
        },
        [theme.breakpoints.up("lg")]: {
            gridTemplateColumns: "repeat(3, 1fr)",
        }
    },
    statistics: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 15,
        marginTop: 50,
    },
    tryAgainBtn: {
        cursor: "pointer"
    },
    shuffler: {
        cursor: "pointer"
    }
}))

export default function QuestionList() {
    const classes = useStyles()

    // State vars
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [correctAnswers, setCorrectAnswers] = useState(0)

    // Redux states
    const { category, limit, difficulty } = useSelector(state => state.quiz)

    // Fetch questions from api
    const fetchQuestions = async (category, limit, difficulty) => {
        setLoading(true)
        // Fetch questions based on these controls
        const req = await fetch(await apiFetch(category, limit, difficulty.toLowerCase()))
        const data = await req.json()

        setQuestions(data.results)
        setLoading(false)
    }

    // a listener for controls changing
    useEffect(async () => {
        fetchQuestions(category, limit, difficulty.toLowerCase())

    }, [category, limit, difficulty])

    // handle increase correct questions
    const handleIncreaseCorrectAnswers = () => {
        setCorrectAnswers(prev => prev + 1)
    }

    // handle reset questions
    const handleRestartQuiz = () => {
        setCorrectAnswers(0)
        fetchQuestions(category, limit, difficulty.toLowerCase())
    }

    // Check if the has ended (when a user answer all questions correctly)
    const isQuizEnded = correctAnswers === questions.length

    // Map through the query questions
    const mappedQuestions = questions.map((question, index) =>
        <Question key={index} increaseCorrectAnswers={handleIncreaseCorrectAnswers} question={question} />)

    return (
        <>
            <div className={classes.statistics}>
                <Typography>Available Questions: {questions.length}. <Link onClick={handleRestartQuiz} className={classes.shuffler}>Shuffle Questions</Link></Typography>
                <Typography>Correct Questions: {correctAnswers}</Typography>
            </div>
            {isQuizEnded && (
                <Typography align="center">Congratulations. <Link className={classes.tryAgainBtn} onClick={handleRestartQuiz}>Play Again</Link></Typography>
            )}
            <div className={classes.questionsGrid}>
                {!loading && mappedQuestions}
                {loading && <QuestionSkeletonList limit={limit} />}
            </div>
        </>

    )
}

/* (!isQuizEnded ||  */