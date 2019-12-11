import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Linking } from "react-native";
import { Subscribe, Provider } from "unstated";
import ReadingListContainer from "../ScreensC/ReadingListContainer";

export default class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: props.item,
			btnText: props.btnText,
			action: props.action
		}
	}

	open = () => {
		const url = "https://en.wikipedia.org/?curid=" + this.state.item.pageid;
		Linking.openURL(url)
	}

	executeAction = container => {
		switch (this.state.action) {
			case "add":
				container.addArticle(this.state.item);
				break;
			case "remove":
				container.removeArticle(this.state.item);
				break;

			default:
				break;
		}
	}

	render() {
		return (
			<Subscribe to={[ReadingListContainer]}>{
				container => (
				<View style={styles.article}>
					<TouchableOpacity onPress={this.open}>
						<Text style={styles.title}>{this.state.item.title}</Text>
						<Text>Distance: {this.state.item.dist}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.executeAction(container)}>
				<Text style={styles.button}>{this.state.btnText}</Text>
					</TouchableOpacity>
				</View>
				)
			}
			</Subscribe>
		)
	}
}

const styles = StyleSheet.create({
	article: {
		borderRadius: 5,
		backgroundColor: "pink",
		marginBottom: 8,
		padding: 8
	},
	title: {
		color: 'blue',
		textAlign: "center"
	},
	button: {
		borderRadius: 5,
		padding: 15,
		backgroundColor: "green",
		width: 200,
		marginTop: 20,
		textAlign: "center",
		alignSelf: "center"
	}
});
