import React, { useState, useEffect } from 'react'
// Router
import { Link as RouterLink } from 'react-router-dom'

// Material-UI imports 
import { Link, List, ListItem, makeStyles } from '@material-ui/core'
// Icons
import { EmojiPeopleOutlined, Save } from '@material-ui/icons'

// Contexts

// Hooks

// Components

// styles
const useStyles = makeStyles(theme => ({
    nav: {
        minWidth: 280,
        "& li": {
            marginBottom: 5,
        }
    },
    link: {
        fontSize: 14.5,
        margin: "auto"
    },
    linkIcon: {
        marginRight: 10
    }
}))

export default function MobileNav({ handleClose }) {
    const classes = useStyles()

    // nav link props
    const linkProps = (to) => ({
        to: `/${to}`,
        component: RouterLink,
        onClick: handleClose,
        color: "inherit",
        className: classes.link
    })

    return (
        <List className={classes.nav}>
            <ListItem>
                <Save className={classes.linkIcon} />
                <Link {...linkProps("saved-questions")}>
                    My Saved Questions
                    </Link>
            </ListItem>
            <ListItem>
                <EmojiPeopleOutlined className={classes.linkIcon} />
                <Link {...linkProps("suggest-category")}>
                    Suggest a Category
                    </Link>
            </ListItem>
        </List>
    )
}