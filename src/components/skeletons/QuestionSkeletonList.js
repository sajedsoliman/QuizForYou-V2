import React, { useState, useEffect } from 'react'

// Material-UI imports 
import { makeStyles } from '@material-ui/core'
// Icons
import { } from '@material-ui/icons'

// Contexts

// Hooks

// Components
import QuestionSkeleton from './QuestionSkeleton'

// styles
const useStyles = makeStyles(theme => ({

}))

export default function QuestionSkeletonList({ limit }) {
    const classes = useStyles()

    // create blank question cards
    const mappedSkeletons = Array.from({ length: limit }).map((value, index) => <QuestionSkeleton key={index} />)

    return (
        <>
            {mappedSkeletons}
        </>
    )
}