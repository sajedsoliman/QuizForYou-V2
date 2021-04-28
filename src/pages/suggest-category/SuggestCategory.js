import React, { useState, useEffect } from "react";

// Material-UI imports
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
// Icons
import {} from "@material-ui/icons";
import { useForm } from "@formspree/react";
import IF from "../../common-components/util/IF";
import Controls from "../../common-components/controls/Controls";
import AppPage from "../AppPage";

// Contexts

// Hooks

// Components

// styles
const useStyles = makeStyles((theme) => ({
	submitBtn: {
		marginTop: 10,
	},
	errorMsg: {
		color: theme.palette.primary.main,
	},
}));

export default function SuggestCategory(props) {
	const classes = useStyles();

	// formspree hook
	const [state, handleSubmit] = useForm("xyylzwkg");

	document.title = "Suggest a Category";

	// sent successfully message
	const sentMessage = <Typography>Thank you for your suggestion :)</Typography>;

	// While submitting the form message
	const SubmittingMessage = <Typography>Sending...</Typography>;

	return (
		<AppPage containerProps={{ maxWidth: "sm" }}>
			<IF condition={!state.succeeded} elseChildren={sentMessage}>
				<IF condition={!state.submitting} elseChildren={SubmittingMessage}>
					<IF condition={state.errors}>
						<Typography variant="overline" className={classes.errorMsg}>
							{state.errors[0]?.message}
						</Typography>
					</IF>
					<form onSubmit={handleSubmit}>
						<Controls.TextInput name="category" label="Your category here" />
						<Button
							variant="outlined"
							color="primary"
							size="small"
							fullWidth
							type="submit"
							className={classes.submitBtn}
						>
							Send
						</Button>
					</form>
				</IF>
			</IF>
		</AppPage>
	);
}
