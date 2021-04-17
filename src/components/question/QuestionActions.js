import React, { } from 'react'

// Material-UI imports 
import { CardActions, IconButton, makeStyles } from '@material-ui/core'
// Icons
import { Archive, ArchiveOutlined } from '@material-ui/icons'

// Contexts
import { ArchivedQuestions, SetArchivedQuestions } from '../../contexts/ArchivedQuestions'

// Hooks

// Components
import IF from '../../common-components/util/IF'

// info

// styles
const useStyles = makeStyles(theme => ({
    actions: {
        padding: 0
    },
    archiveButton: {
        marginLeft: "auto",
    }
}))

export default function QuestionActions({ question }) {
    const classes = useStyles()
    const archivedQuestions = ArchivedQuestions()
    const setArchivedQuestions = SetArchivedQuestions()

    // Destructuring the question
    const { question: body, title, correct_answer } = question

    // check if the current question has archived before or not
    const hasArchived = archivedQuestions.some(question => question.question == body)

    // handle archive the current question
    const handleArchiveQuestion = () => {
        const questionToArchive = {
            question: body,
            correctAnswer: correct_answer
        }
        setArchivedQuestions(hasArchived ? archivedQuestions.filter(question => question.question != body) :
            [...archivedQuestions, questionToArchive])
    }

    return (
        <CardActions className={classes.actions} disableSpacing>
            <IconButton className={classes.archiveButton} onClick={handleArchiveQuestion}>
                <IF condition={hasArchived} elseChildren={<ArchiveOutlined />}>
                    <Archive />
                </IF>
            </IconButton>
        </CardActions>
    )
}