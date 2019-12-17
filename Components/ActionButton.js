import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ActionButton = props => (
	<TouchableOpacity onPress={props.onClick}>
		<Text style={styles.actionButton}>{props.text}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	actionButton: {
		padding: 15,
		margin: 16,
		marginTop: 8,
		marginBottom: 8,
		textAlign: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "black"
	}
})

export default ActionButton;
