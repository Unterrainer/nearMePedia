import React from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions"

export default class AddLocation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			long: "",
			lat: "",
			addTxt: "",
			address: {},
			isValid: false
		}
	}

	updateLong = val => this.setState({long: val}, this.validateForm);

	updateAddress = add => this.setState({addTxt: add}, this.validateForm);

	handleSubmit = async () => {
		const addrList = await Location.geocodeAsync(this.state.addTxt);
		if (addrList && addrList.length) {
			const addr = addrList[0];
			const loc = await this.findAddress(addr);
			if (loc) {
				const location = {
					latitude: addr.latitude,
					longitude: addr.longitude,
					...loc
				};
				this.props.btnAction(location);
			}
		}
	}

	findAddress = async addr => {
		const { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status === "granted") {
			const location = { latitude: parseFloat(addr.latitude), longitude: parseFloat(addr.longitude)};
			const addressList = await Location.reverseGeocodeAsync(location);
			if (addressList && addressList.length)
				return addressList[0];
		}
		return null;
	}

	getLocation = () => {
		return {
			longitude: this.state.long,
			latitude: this.state.lat
		}
	}

	validateForm = () => {
		const formValid = this.state.addTxt && this.state.addTxt.length;
		this.setState({ isValid: formValid })
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


