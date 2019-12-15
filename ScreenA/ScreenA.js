import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import ActionButton from "../ActionButton";

export default class ScreenA extends React.Component {

	constructor() {
		super();
		this.state = {
			// lat: "46.510725",
			// long: "11.266791",
			// isValid: true
			lat: "",
			long: "",
			isValid: false
		}
	}

	updateLongitude = loc => {
		this.setState({
			long: loc,
		},
		this.validateForm
		);
	}

	updateLatitude = loc => {
		this.setState({
			lat: loc
		},
		this.validateForm
		);
	}

	validateForm = () => {
		const valForm = (
			+this.state.lat
			&& +this.state.long
		);
		this.setState({isValid: valForm});
	}

	onSubmit = () => {
		this.props.navigateTo(
			this.state.long,
			this.state.lat
		)
	}

	render() {
		return (
			<View>
				<View style={styles.inputContainer}>
					<TextInput
					placeholder="Latitude"
					onChangeText={this.updateLatitude}
					keyboardType={'numeric'}
				></TextInput>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder="Longitude"
						onChangeText={this.updateLongitude}
						keyboardType={'numeric'}
					></TextInput>
				</View>
				<Button
					title="Search"
					onPress={this.onSubmit}
					disabled={!this.state.isValid}
				/>
			</View>
		)
	}
}

ScreenA.navigationOptions = {title: "Search"}

const styles = StyleSheet.create({
	inputContainer: {
		margin: 16,
	}
});
