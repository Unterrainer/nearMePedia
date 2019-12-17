import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { getCurrentAddress } from "../Utils/myLocation"

export default class SearchComponent extends React.Component {

	state = {
		address: "",
		isValid: false
	}

	async componentDidMount() {
		const curAddr = await getCurrentAddress();
		this.setState({
			address: curAddr.street + " " + curAddr.name + ", " + curAddr.city
		}, this.validateForm);
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
						value={this.state.address}
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
