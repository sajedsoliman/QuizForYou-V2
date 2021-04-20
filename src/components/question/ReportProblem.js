import React, { useState, useEffect } from 'react'

// Material-UI imports 
import { Button, makeStyles, Typography } from '@material-ui/core'
// Icons
import { } from '@material-ui/icons'
import Controls from '../../common-components/controls/Controls'

// Contexts

// Hooks

// Components
import { useForm, ValidationError } from '@formspree/react';
import IF from '../../common-components/util/IF';

// styles
const useStyles = makeStyles(theme => ({
    submitBtn: {
        // width: 150,
        // display: "block",
        marginTop: 10
        // margin: "auto"
    },
    message: {
        paddingBottom: 20
    }
}))

export default function ReportProblem({ title }) {
    const classes = useStyles()

    // State vars
    // const [claimText, setClaimText] = useState("")

    // Import formsPree to send claims to me
    const [state, handleSubmit] = useForm("meqvogoa", {
        data: {
            questionTitle: title,
        }
    });


    // handle clain text change
    // const claimInputChange = (e) => {
    //     setClaimText(e.target.value)
    // }


    // handle submit the form
    const handleSendClaim = (e) => {
        e.preventDefault()

        // Sending claims logic
    }

    // successfully sent report message
    const ReportSentAlert = <Typography className={classes.message}>Your claim has sent. Thanks</Typography>

    // While submitting the form message
    const SubmittingMessage = <Typography>Sending...</Typography>

    return (
        <IF condition={!state.succeeded} elseChildren={ReportSentAlert}>
            <IF condition={!state.submitting} elseChildren={SubmittingMessage}>
                <form onSubmit={handleSubmit}>
                    <Controls.TextArea
                        rows={5}
                        label={"Your Claim"}
                        name="claim"
                    />
                    <Button variant="outlined"
                        color="primary"
                        size="small"
                        fullWidth
                        type="submit"
                        className={classes.submitBtn}>Send</Button>
                </form>
            </IF>
        </IF>
    )
}