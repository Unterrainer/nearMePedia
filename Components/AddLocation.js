import React from "react";
import { View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
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

	updateLong = val => {
		if (+val) {
			this.setState({long: val}, this.validateForm);
		}
	}

	updateAddress = add => {
		this.setState({addTxt: add}, this.validateForm);
	}

	updateLat = val => {
		if (+val) {
			this.setState({lat: val}, this.validateForm);
		}
	}

	handleSubmit = async () => {
		const addrList = await Location.geocodeAsync(this.state.addTxt);
		if (addrList && addrList.length) {
			const addr = addrList[0];
			const loc = await this.findAddress(addr);
			if (loc) {
				console.log("loc",loc)
				const location = {
					latitude: addr.latitude,
					longitude: addr.longitude,
					...loc
				};
				console.log("location", location);
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
				<View>
					<View>
						<TextInput
							placeholder="Address"
							onChangeText={this.updateAddress}
						></TextInput>
					</View>
					{/* <View>
						<TextInput
							placeholder="Longitude"
							onChangeText={this.updateLong}
							keyboardType={'numeric'}
							></TextInput>
					</View>
					<View>
						<TextInput
							placeholder="Latitude"
							onChangeText={this.updateLat}
							keyboardType={'numeric'}
						></TextInput>
					</View> */}
					<Button
						title="Add"
						onPress={this.handleSubmit}
						disabled={!this.state.isValid}
					/>
				</View>
		);
	}
}

