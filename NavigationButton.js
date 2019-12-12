import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default class NavigationButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity onPress={this.props.navigate}>
				<Text>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}

}

