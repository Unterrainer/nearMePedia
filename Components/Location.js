import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ActionButton from "./ActionButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const Location = props => (
	<View style={styles.container}>
		<TouchableOpacity onPress={props.open}>
			<Text style={styles.title}>{props.location.street} {props.location.name}</Text>
			<Text>Name: {props.location.name}</Text>
			<Text>Street: {props.location.street}</Text>
			<Text>Postalcode: {props.location.postalCode}</Text>
			<Text>City: {props.location.city}</Text>
			<Text>Region: {props.location.region}</Text>
			<Text>Country: {props.location.country}</Text>
		</TouchableOpacity>
		<ActionButton
			text="Remove from list"
			onClick={() => props.remove()}
		/>
	</View>
);

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

export default Location;
