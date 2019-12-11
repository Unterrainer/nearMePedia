import React from "react";
import { Subscribe, Provider } from "unstated";
import { Text, View, StyleSheet } from "react-native";
import ReadingListContainer from "./ReadingListContainer";
import ArticleList from "../ArticleList/ArticleList";
import ReadingList from "../ReadingList/ReadingList";

export default class ScreenC extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<ReadingList></ReadingList>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	warning: {
		padding: 15,
		backgroundColor: "red",
		fontSize: 20,
		color: "white",
		margin: 20,
		borderRadius: 5,
		textAlign: "center",
		opacity: 0.5
	}
});
