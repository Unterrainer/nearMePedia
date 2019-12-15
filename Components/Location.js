import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ActionButton from "./ActionButton";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Location extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: props.location
		};
		console.log(props.location)
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.props.open}>
					<Text style={styles.title}>{this.props.location.name}</Text>
					<Text>Street: {this.props.location.street}</Text>
					<Text>Postalcode: {this.props.location.postalCode}</Text>
					<Text>City: {this.props.location.city}</Text>
					<Text>Region: {this.props.location.region}</Text>
					<Text>Country: {this.props.location.country}</Text>
				</TouchableOpacity>
				<ActionButton
					text="Remove from list"
					onClick={() => this.props.remove()}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 5,
		backgroundColor: "#fafafa",
		padding: 8,
		margin: 16
	},
	title: {
		color: 'blue',
		fontSize: 20,
		textAlign: "center",
		marginBottom: 10
	}
});
