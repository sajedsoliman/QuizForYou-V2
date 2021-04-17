import React, { useState, useMemo } from 'react'

// Material-UI imports 
import { makeStyles } from '@material-ui/core'
// Icons
import { } from '@material-ui/icons'

// Contexts

// Hooks

// Components
import Controls from '../../common-components/controls/Controls'

// styles
const useStyles = makeStyles(theme => ({
    answersWrapper: {
        marginTop: 25
    }
}))

export default function QuestionAnswersList({ question, increaseCorrectAnswers, setResult, setFlipped }) {
    const classes = useStyles()

    // Destructuring the question
    const { incorrect_answers, correct_answer } = question

    // State vars
    const [checkedValue, setCheckValue] = useState("")

    // Answers memo
    const shuffledAnswers = useMemo(() => {
        return [...incorrect_answers, correct_answer].sort(() => Math.random() - .5)
    }, [])

    // handle choose an answer and check if it's true or not
    const handleChooseAnswer = (e) => {
        // To check if the targeted element is label or input
        const selectedValue = e.target.value == undefined ? e.target.getAttribute("data-value") : e.target.value
        const isAnswerCorrect = selectedValue == correct_answer
        setResult(isAnswerCorrect ? "Right" : "Wrong. Try again")
        setFlipped(true)
        if (!isAnswerCorrect) {
            setTimeout(() => {
                setFlipped(false)
            }, 1500)
        } else {
            increaseCorrectAnswers()
        }
    }

    // Answers radio group props
    const radioGroupProps = {
        label: "Answers",
        value: checkedValue,
        isRow: false,
        onChangeHandle: handleChooseAnswer,
        items: shuffledAnswers.map(answer => ({
            label: answer, value: answer,
        })),
        radioProps: {
            // onMouseEnter: (e) => {
            // },
            // onMouseLeave: () => setCheckValue(""),
        }
    }

    return (
        <div className={classes.answersWrapper}>
            <Controls.ReusableRadioGroup {...radioGroupProps} />
        </div>
    )
}