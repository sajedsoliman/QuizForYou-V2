import React, { useState, useEffect } from 'react'
// Router
import { Link as RouterLink } from 'react-router-dom'

// Material-UI imports 
import { AppBar, IconButton, Link, makeStyles, SwipeableDrawer, Toolbar, Typography } from '@material-ui/core'
// Icons
import { Menu } from '@material-ui/icons'

// Contexts

// Hooks

// Components
import DarkModeSwitch from './DarkModeSwitch'
import MobileNav from './MobileNav'

// styles
const useStyles = makeStyles(theme => ({
    nav: {
        marginLeft: 40,
        [theme.breakpoints.down(560)]: {
            display: "none"
        }
    },
    navLink: {
        fontSize: 15,
        marginRight: 10,
        "&:hover": {
            color: "rgb(249 188 209)"
        }
    },
    controls: {
        marginLeft: "auto"
    },
    mobileMenuToggler: {
        [theme.breakpoints.up(560)]: {
            display: "none"
        }
    }
}))

export default function Header({ toggleDarkMode }) {
    const classes = useStyles()

    // State vars
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // handle toggle mobile drawer
    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev)
    }

    // Mobile drawer props
    const drawerProps = {
        open: mobileMenuOpen,
        onClose: toggleMobileMenu,
        swipeAreaWidth: 40,
        anchor: "right",
        onOpen: toggleMobileMenu
    }

    return (
        <AppBar color="secondary">
            <Toolbar variant="dense">
                <Typography color="initial">
                    <Link to="/" color="inherit" underline="none" component={RouterLink}>QuizForYou</Link>
                </Typography>
                <Typography className={classes.nav}>
                    <Link to="/saved-questions" className={classes.navLink} color="inherit" underline="none" component={RouterLink}>My Saved Questions</Link>
                    <Link to="/suggest-category" className={classes.navLink} color="inherit" underline="none" component={RouterLink}>Suggest a Category</Link>
                </Typography>

                {/* Mobile drawer toggler */}
                <div className={classes.controls}>
                    <IconButton size="small" color="inherit" className={classes.mobileMenuToggler} onClick={toggleMobileMenu}>
                        <Menu />
                    </IconButton>
                </div>

                {/* Mobile menu drawer */}
                <SwipeableDrawer {...drawerProps}>
                    <MobileNav handleClose={toggleMobileMenu} />
                </SwipeableDrawer>

                {/* Dark mode switch */}
                <DarkModeSwitch toggleDarkMode={toggleDarkMode} />
            </Toolbar>
        </AppBar>
    )
}