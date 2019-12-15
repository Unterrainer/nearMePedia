import React from "react";
import { View, Text } from "react-native";
import ArticleList from "./ArticleList/ArticleList";
import ReadingListContainer from "./ScreensC/ReadingListContainer";
import { Subscribe } from "unstated";

const addToReadingList = (container, article) => {
	container.addArticle(article)
}

const ResultListScreen = props => {
	return (
		<Subscribe to={[ReadingListContainer]}>{
			container => (
				<ArticleList
					location={props.navigation.getParam("location")}
					btnText={"Add to reading-list"}
					btnAction={(article) => addToReadingList(container, article)}
				/>
			)
		}
		</Subscribe>
	)
}

ResultListScreen.navigationOptions = {title: "Results"}

export default ResultListScreen;
