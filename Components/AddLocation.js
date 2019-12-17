import React from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";
import { getLocationFromAddress, findAddress } from "../Utils/myLocation";

export default class AddLocation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: "",
			isValid: false
		}
	}

	updateAddress = add => this.setState({address: add}, this.validateForm);

	validateForm = () => this.setState({ isValid: this.state.address && this.state.address.length });

	handleSubmit = async () => {
		const locList = await getLocationFromAddress(this.state.address);
		if (locList && locList.length) {
			const loc = locList[0];
			const address = await findAddress(loc);
			if (address) {
				const location = {
					latitude: loc.latitude,
					longitude: loc.longitude,
					...address
				};
				this.props.btnAction(location);
			}
		}
	}

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
					title="Add"
					onPress={this.handleSubmit}
					disabled={!this.state.isValid}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 16
	}
});
