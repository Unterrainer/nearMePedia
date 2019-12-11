import React from "react";
import { Text, StyleSheet, View, SafeAreaView, FlatList, WebView, TouchableOpacity  } from "react-native";
import Article from "../Article/Article";
import { Provider, Subscribe } from "unstated";
import ReadingListContainer from "../ScreensC/ReadingListContainer";

export default class ArticleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: props.results || [],
			btnText: props.btnText,
			action: props.action
		}
	}

	render() {
		return (
			<View>
				<FlatList
					data={this.state.results}
					renderItem={
						({ item }) =>
							<Article
								item={item}
								btnText={this.state.btnText}
								action={this.state.action}
							/>
					}
					keyExtractor={item => item.pageid.toString()}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 30,
	},
	webcontainer: {
		flex: 1
	}
});
