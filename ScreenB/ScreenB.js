import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ScreenB extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<View>
				<Text style={styles.title}>Favorite locations</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		textAlign: "center",
		fontSize: 20,

	}
});
