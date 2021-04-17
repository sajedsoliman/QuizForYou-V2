import React, { useState, useEffect } from 'react'

// Material-UI imports 
import { Container, makeStyles } from '@material-ui/core'
// Icons
import { } from '@material-ui/icons'

// Contexts
import { ArchivedQuestions as ArchivedQuestionsContext, SetArchivedQuestions } from '../../contexts/ArchivedQuestions'

// Hooks
import useLocalStorage from '../../common-components/hooks/useLocalStorage'

// Components
import { Question } from '../../components/question/Question'

// info

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
}))

export default function ArchivedQuestions(props) {
    const classes = useStyles()
    const archivedQuestions = ArchivedQuestionsContext()

    // map through questions
    const mappedQuestions = archivedQuestions.map((question, index) => {
        return <Question question={question} purpose={"local"} key={index} />
    })

    return (
        <Container>
            <div className={classes.questionsGrid}>
                {mappedQuestions}
            </div>
        </Container>
    )
}