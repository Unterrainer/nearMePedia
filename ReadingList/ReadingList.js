import React from "react";
import { Text, FlatList, View } from "react-native";
import { Subscribe } from "unstated";
import ReadingListContainer from "../ScreensC/ReadingListContainer";
import Article from "../Article/Article";

export default class ReadingList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Subscribe to={[ReadingListContainer]}>{
				container => (
					<View>
						{
							(!container.state.readingList || !container.state.readingList.length)
							? <Text>Add something to your Reading-list</Text>
							: <FlatList
								data={container.state.readingList}
								renderItem={
									({ item }) =>
										<Article
											item={item}
											btnText={"Remove from reading-list"}
											action={"remove"}
										/>
								}
								keyExtractor={item => item.pageid.toString()}
							/>
						}
					</View>
				)
			}
			</Subscribe>
		)
	}
}
