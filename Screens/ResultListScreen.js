import React from "react";
import ArticleList from "../Components/ArticleList";
import ReadingListContainer from "../Containers/ReadingListContainer";
import { Subscribe } from "unstated";

const addToReadingList = (container, article) => {
	container.addArticle(article)
}

const ResultListScreen = props => {
	return (
		<Subscribe to={[ReadingListContainer]}>{
			container => (
				<ArticleList
					address={props.navigation.getParam("address")}
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
