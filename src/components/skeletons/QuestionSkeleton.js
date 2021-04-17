import React, { useState, useEffect } from 'react'

// Material-UI imports 
import { Card, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
// Icons
import { } from '@material-ui/icons'

// Contexts

// Hooks

// Components

// styles
import "./styles.css"
const useStyles = makeStyles(theme => ({
    card: {
        padding: 15,
        position: "relative",
        overflow: "hidden"
    },
    questionTitle: {
        height: 18,
        borderBottom: "6px solid #222",
        borderTop: "6px solid #222",
        marginBottom: 40
    },
    label: {
        height: 7,
        width: 55,
        background: theme.palette.secondary.main,
        marginBottom: 15
    },
    radioRow: {
        display: "flex",
        alignItems: "center",
        marginBottom: 10
    },
    circle: {
        width: 15,
        height: 15,
        borderRadius: 50,
        boxShadow: "0 0 0 2px #fff, 0 0 0 3px #000"
    },
    radioLabel: {
        width: 45,
        height: 7,
        backgroundColor: "#666",
        marginLeft: 10
    }
}))

export default function QuestionSkeleton(props) {
    const classes = useStyles()


    return (
        <Card elevation={3} className={clsx(classes.card, "skeleton_card")}>
            {/* Question title - 2 lines */}
            <div className={classes.questionTitle}></div>

            {/* answers => title(Answers) and radios */}
            <div className={classes.label}></div>
            <div className={classes.radioRow}>
                <span className={classes.circle}></span>
                <span className={classes.radioLabel}></span>
            </div>
            <div className={classes.radioRow}>
                <span className={classes.circle}></span>
                <span className={classes.radioLabel}></span>
            </div>
            <div className={classes.radioRow}>
                <span className={classes.circle}></span>
                <span className={classes.radioLabel}></span>
            </div>
            <div className={classes.radioRow}>
                <span className={classes.circle}></span>
                <span className={classes.radioLabel}></span>
            </div>
        </Card>
    )
}