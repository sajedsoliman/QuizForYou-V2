import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'

// Material-UI imports 
import { Container, Link, makeStyles, Typography } from '@material-ui/core'
// Icons
import { } from '@material-ui/icons'

// Contexts
import { ArchivedQuestions as ArchivedQuestionsContext, SetArchivedQuestions } from '../../contexts/ArchivedQuestions'

// Hooks
import useLocalStorage from '../../common-components/hooks/useLocalStorage'

// Components
import { Question } from '../../components/question/Question'
import IF from '../../common-components/util/IF'

// info
import { noArchivedQuestionsMessage } from '../../helpers/info'

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

    // the no saved or archived questions message(rendering component)
    const noSavedQuestions = <Typography>{noArchivedQuestionsMessage}
        &nbsp;<Link to="/" component={RouterLink}>Quiz</Link></Typography>

    return (
        <Container>
            <IF condition={mappedQuestions.length != 0} elseChildren={noSavedQuestions}>
                <div className={classes.questionsGrid}>
                    {mappedQuestions}
                </div>
            </IF>
        </Container>
    )
}