import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default class SearchComponent extends React.Component {

	state = {
		address: "",
		isValid: false
	}

	updateAddress = add => this.setState({ address: add }, this.validateForm);

	validateForm = () => this.setState({isValid: this.state.address && this.state.address.length});

	onSubmit = () => this.props.navigateTo(this.state.address);


	render() {
		return (
			<View style={styles.container}>
				<View style={styles.container}>
					<TextInput
						placeholder="Address"
						onChangeText={this.updateAddress}
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

const styles = StyleSheet.create({
	container: {
		margin: 16
	}
});
