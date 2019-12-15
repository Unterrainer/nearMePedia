import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class ActionButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: props.text,
			onClick: props.onClick
		}
	}

	render() {
		return (
			<TouchableOpacity onPress={this.state.onClick}>
				<Text style={styles.actionButton}>{this.state.text}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	actionButton: {
		padding: 15,
		margin: 16,
		textAlign: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "black"
	}
})
