import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class NavigationButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity onPress={this.props.navigate}>
				<Text style={styles.button}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		padding: 15,
		borderWidth: 1,
		borderColor: "black",
		margin: 16,
		borderRadius: 5
	}
});

