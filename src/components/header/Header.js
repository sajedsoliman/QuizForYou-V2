import React, { useState, useEffect } from 'react'
// Router
import { Link as RouterLink } from 'react-router-dom'

// Material-UI imports 
import { AppBar, Link, makeStyles, Toolbar, Typography } from '@material-ui/core'
// Icons
import { } from '@material-ui/icons'

// Contexts

// Hooks

// Components
import DarkModeSwitch from './DarkModeSwitch'

// styles
const useStyles = makeStyles(theme => ({
    nav: {
        marginLeft: 40
    },
    navLink: {
        "&:hover": {
            color: "rgb(249 188 209)"
        }
    }
}))

export default function Header({ toggleDarkMode }) {
    const classes = useStyles()

    return (
        <AppBar color="secondary">
            <Toolbar variant="dense">
                <Typography color="initial">
                    <Link to="/" color="inherit" underline="none" component={RouterLink}>QuizForYou</Link>
                </Typography>
                <Typography className={classes.nav}>
                    <Link to="/saved-questions" className={classes.navLink} color="inherit" underline="none" component={RouterLink}>My Saved Questions</Link>
                </Typography>
                {/* Dark mode switch */}
                <DarkModeSwitch toggleDarkMode={toggleDarkMode} />
            </Toolbar>
        </AppBar>
    )
}