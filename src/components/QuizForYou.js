import React, { useState, useEffect } from 'react'

// Redux

// Material-UI imports 
import { Container, Divider, makeStyles } from '@material-ui/core'
// Icons

// Contexts

// Hooks

// Components
import QuizControls from './QuizControls'
import QuestionList from './question/QuestionList'

// styles
const useStyles = makeStyles(theme => ({

}))

export default function QuizForYou({ toggleDarkMode }) {
    const classes = useStyles()

    return (
        <div>
            <Container>
                {/* Quiz Controls => limit, category, difficulty */}
                <QuizControls />

                {/*  divider */}
                <Divider />

                {/* Question List of cards */}
                <QuestionList />
            </Container>
        </div>
    )
}