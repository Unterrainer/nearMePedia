import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ActionButton from "./ActionButton";

export default class RootComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.title}>NearMePedia</Text>
				<ActionButton
					text={"Search for articles"}
					onClick={() => this.props.navigateTo("SearchArticles")}
				/>
				<ActionButton
					text={"Favorite Locations"}
					onClick={() => this.props.navigateTo("FavoriteLocations")}
				/>
				<ActionButton
					text={"Reading list"}
					onClick={() => this.props.navigateTo("ReadingList")}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center"
	},
	title: {
		fontSize: 32,
		textAlign: "center",
		marginBottom: 100,
	}
});
