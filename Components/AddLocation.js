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
			address: {},
			isValid: false
		}
	}

	updateLong = val => {
		if (+val) {
			this.setState({long: val}, this.validateForm);
		}
	}

	updateLat = val => {
		if (+val) {
			this.setState({lat: val}, this.validateForm);
		}
	}

	handleSubmit = async () => {
		await this.findAddress();
		console.log("addr",this.state.address);
		const location = {
			latitude: this.state.lat,
			longitude: this.state.long,
			...this.state.address
		}
		console.log("loc", location);
		this.props.btnAction(location);
	}

	findAddress = async () => {
		const { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status === "granted") {
			const location = { latitude: parseFloat(this.state.lat), longitude: parseFloat(this.state.long)};
			const addressList = await Location.reverseGeocodeAsync(location);
			if (addressList.length > 0)
				this.setState({address: addressList[0]})
		}
	}

	getLocation = () => {
		return {
			longitude: this.state.long,
			latitude: this.state.lat
		}
	}

	validateForm = () => {
		const formValid = (+this.state.long > 0
			&& +this.state.lat > 0
			&& +this.state.long > 0
		)
		this.setState({ isValid: formValid })
	}

	render() {
		return (
				<View>
					<View>
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

