import React, { useState, useEffect } from 'react'

// Material-UI imports 
import { Button, Container, makeStyles, Typography } from '@material-ui/core'
// Icons
import { } from '@material-ui/icons'
import { useForm } from '@formspree/react'
import IF from '../../common-components/util/IF'
import Controls from '../../common-components/controls/Controls'

// Contexts

// Hooks

// Components

// styles
const useStyles = makeStyles(theme => ({
    submitBtn: {
        marginTop: 10
    },
}))

export default function SuggestCategory(props) {
    const classes = useStyles()

    // formspree hook
    const [state, handleSubmit] = useForm("xyylzwkg")

    // sent successfully message
    const sentMessage = <Typography>Thank you for your suggestion :)</Typography>

    // While submitting the form message
    const SubmittingMessage = <Typography>Sending...</Typography>

    return (
        <Container maxWidth="sm">
            <IF condition={!state.succeeded} elseChildren={sentMessage}>
                <IF condition={!state.submitting} elseChildren={SubmittingMessage}>
                    <form onSubmit={handleSubmit}>
                        <Controls.TextInput name="category" label="Your category here" />
                        <Button variant="outlined"
                            color="primary"
                            size="small"
                            fullWidth
                            type="submit"
                            className={classes.submitBtn}>Send</Button>
                    </form>
                </IF>
            </IF>
        </Container>
    )
}