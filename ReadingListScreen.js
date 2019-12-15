import React from "react";
import { Subscribe } from "unstated";
import ReadingList from "./ReadingList/ReadingList";
import ReadingListContainer from "./ScreensC/ReadingListContainer";


const ReadingListScreen = props => {



	return (
		<Subscribe to={[ReadingListContainer]}>{
			container => (
				<ReadingList
					readingList={container.state.readingList}
					btnAction={(article) => container.removeArticle(article)}
				/>
			)
		}
		</Subscribe>
	)
}

ReadingListScreen.navigationOptions = {title: "Reading list"}

export default ReadingListScreen;
