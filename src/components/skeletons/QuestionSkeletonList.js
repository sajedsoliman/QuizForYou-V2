import React from "react";

// Material-UI imports
import { makeStyles } from "@material-ui/core";
// Icons
import {} from "@material-ui/icons";

// Components
import QuestionSkeleton from "./QuestionSkeleton";

// styles
const useStyles = makeStyles((theme) => ({}));

export default function QuestionSkeletonList({ skeletonsCount }) {
	const classes = useStyles();

	// create blank question cards
	const mappedSkeletons = Array.from({ length: skeletonsCount }).map(
		(value, index) => <QuestionSkeleton key={index} />
	);

	return <>{mappedSkeletons}</>;
}
