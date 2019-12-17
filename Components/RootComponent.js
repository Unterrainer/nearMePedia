import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ActionButton from "./ActionButton";

const RootComponent = props => (
	<View style={styles.container}>
		<Text style={styles.title}>NearMePedia</Text>
		<ActionButton
			text={"Search for articles"}
			onClick={() => props.navigateTo("SearchArticles")}
		/>
		<ActionButton
			text={"Favorite Locations"}
			onClick={() => props.navigateTo("FavoriteLocations")}
		/>
		<ActionButton
			text={"Reading list"}
			onClick={() => props.navigateTo("ReadingList")}
		/>
	</View>
);

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

export default RootComponent;
