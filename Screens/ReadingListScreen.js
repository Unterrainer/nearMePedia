import React from "react";
import { Subscribe } from "unstated";
import ReadingList from "../Components/ReadingList";
import ReadingListContainer from "../Containers/ReadingListContainer";


const ReadingListScreen = () => {
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
