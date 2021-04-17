import React, { useState, useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { changeControl } from '../redux/quiz'

// Material-UI imports 
import { Grid, makeStyles, Slider, Typography, useTheme } from '@material-ui/core'
// Icons
import { } from '@material-ui/icons'

// Contexts

// Hooks

// Components
import Controls from '../common-components/controls/Controls'

// Others
import { QUIZ_CATEGORIES, QUIZ_DIFFICULTIES, QUESTION_LIMITS } from '../helpers/info'

// styles
const useStyles = makeStyles(theme => ({
    controls: {
        marginBottom: 50
    },
    sliderValueLabel: {
        left: 'calc(-50% - 8px)',
        top: -38,
        "& > span": {
            width: 40,
            height: 40
        }
    },
    easySlider: {
        backgroundColor: "green",
        "& > span> span": {
            backgroundColor: "green",
        }
    },
    mediumSlider: {
        backgroundColor: "rgb(247 247 0)",
        "& > span> span": {
            backgroundColor: "rgb(247 247 0 / 74%)",
            "& span": {
                color: "black"
            }
        }
    },
    hardSlider: {
        backgroundColor: "red",
        "& > span> span": {
            backgroundColor: "red",
            color: "black"
        }
    },
    difficultySliderWrapper: {
        width: "88%",
        "& > span": {
            marginLeft: 20
        }
    }
}))

// difficulty marks
const marks = [
    {
        value: 1,
        label: 'Easy',
    },
    {
        value: 2,
        label: 'Medium',
    },
    {
        value: 3,
        label: 'Hard',
    },
]

export default function QuizControls(props) {
    const classes = useStyles()
    const darkMode = useTheme().palette.type == "dark"

    // redux states
    const { category, limit, difficulty } = useSelector(state => state.quiz)
    const dispatch = useDispatch()

    const gridItemProps = {
        item: true,
        xs: 12,
        sm: 6,
        md: 4,
        xl: 3
    }

    const selectBoxProps = (name, value, label, items) => ({
        name,
        value,
        label,
        items,
        size: "small",
        onChangeHandle: (e) => dispatch(changeControl(e))
    })

    // Get difficulty label value by the current index (1,2,3) = (easy, med, hard)
    const getLabelValueByIndex = (index) => {
        let labelValue
        switch (index) {
            case 1:
                labelValue = "Easy";
                break;
            case 2:
                labelValue = "Med";
                break;
            default:
                labelValue = "Hard";
        }
        return labelValue

    }

    // Get the apt styles based on the difficulty
    const getStyleForThumb = () => {
        let className;
        switch (difficulty) {
            case "Easy":
                className = classes.easySlider
                break;
            case "Medium":
                className = classes.mediumSlider
                break;
            default:
                className = classes.hardSlider
        }
        return className
    }

    // difficulty slider props
    const sliderProps = {
        step: null,
        min: 1,
        max: 3,
        classes: {
            valueLabel: classes.sliderValueLabel, track: getStyleForThumb(),
            thumb: getStyleForThumb()
        },
        valueLabelDisplay: "off",
        onChange: (val, newValue) => {
            dispatch(changeControl({ target: { value: getLabelValueByIndex(newValue) == "Med" ? "Medium" : getLabelValueByIndex(newValue), name: "difficulty" } }))
        },
        color: darkMode ? "secondary" : "primary",
        marks,
    }

    return (
        <div className={classes.controls}>
            <Typography variant="h6" paragraph>Quiz Settings</Typography>
            <Grid container className={classes.controls} spacing={2}>
                <Grid {...gridItemProps}>
                    <Controls.SelectBoxInput {...selectBoxProps("category", category, "Category", QUIZ_CATEGORIES)} />
                </Grid>
                <Grid {...gridItemProps}>
                    <Controls.SelectBoxInput {...selectBoxProps("limit", limit, "Limit", QUESTION_LIMITS)} />
                </Grid>
                <Grid {...gridItemProps}>
                    <Typography>Difficulty</Typography>
                    {/* Difficulty slider */}
                    <div className={classes.difficultySliderWrapper}>
                        <Slider {...sliderProps} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}