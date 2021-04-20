import React, { useState } from 'react'

// Material-UI imports 
import { Button, CardActions, IconButton, Link, makeStyles, Typography } from '@material-ui/core'
// Icons
import { Archive, ArchiveOutlined } from '@material-ui/icons'

// Contexts
import { ArchivedQuestions, SetArchivedQuestions } from '../../contexts/ArchivedQuestions'

// Hooks

// Components
import IF from '../../common-components/util/IF'
import PopUp from '../../common-components/ui/PopUp'
import ReportProblem from './ReportProblem'


// info

// styles
const useStyles = makeStyles(theme => ({
    actions: {
        padding: 0
    },
    archiveButton: {
        marginLeft: "auto",
    },
    reportLink: {
        cursor: "pointer",
        fontSize: 14.5
    },
    dialogBody: {
        minWidth: 350,
        paddingBottom: 15
    }
}))

export default function QuestionActions({ question }) {
    const classes = useStyles()
    const archivedQuestions = ArchivedQuestions()
    const setArchivedQuestions = SetArchivedQuestions()

    // Destructuring the question
    const { question: body, correct_answer } = question

    // State vars
    const [reportPopupOpen, setReportPopupOpen] = useState(false)

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

    // handle open (report a problem in the question) popup
    const handleShowReportPopup = () => {
        setReportPopupOpen(prev => !prev)
    }

    // Popup props
    const reportPopUpProps = {
        infoFunc: {
            isOpen: reportPopupOpen,
            title: "Report a problem in the question."
        },
        contentStyles: classes.dialogBody,
        closeHandle: handleShowReportPopup
    }

    const archiveIcon = <IF condition={hasArchived} elseChildren={<ArchiveOutlined />}>
        <Archive />
    </IF>

    return (
        <CardActions className={classes.actions} disableSpacing>
            <Link onClick={handleShowReportPopup} className={classes.reportLink}>Report a problem</Link>
            <Button size="small"
                className={classes.archiveButton}
                onClick={handleArchiveQuestion}
                endIcon={archiveIcon}>
                {hasArchived ? "Remove" : "Save"}

            </Button>

            {/* Report a problem popup */}
            <PopUp {...reportPopUpProps}>
                <ReportProblem title={body} />
            </PopUp>
        </CardActions>
    )
}