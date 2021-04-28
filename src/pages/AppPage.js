import React, { useState, useEffect } from "react";

// Material-UI imports
import { Container, makeStyles } from "@material-ui/core";
// Icons
import {} from "@material-ui/icons";

// Contexts

// Hooks

// Components

// styles
const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: 80,
		paddingBottom: 40,
		position: "relative",
		zIndex: 10,
	},
}));

export default function AppPage({ children, containerProps }) {
	const classes = useStyles();

	return (
		<div>
			<Container {...containerProps} className={classes.container}>
				{children}
			</Container>
		</div>
	);
}
