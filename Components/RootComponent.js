import React from "react";
import { Text, View, StyleSheet } from "react-native";
import NavivationButton from "./NavigationButton";

export default class RootComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.title}>NearMePedia</Text>
				<NavivationButton
					text={"Search for articles"}
					navigate={() => this.props.navigateTo("SearchArticles")}
				/>
				<NavivationButton
					text={"Favorite Locations"}
					navigate={() => this.props.navigateTo("FavoriteLocations")}
				/>
				<NavivationButton
					text={"Reading list"}
					navigate={() => this.props.navigateTo("ReadingList")}
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
