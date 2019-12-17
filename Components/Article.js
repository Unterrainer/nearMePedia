import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Linking } from "react-native";
import ActionButton from "./ActionButton";

export default class Article extends React.Component {
	constructor(props) {
		super(props);
	}

	calcDistance = () => {
		const R = 6371000; // Radius of earth in meter
		const loc1 = this.props.item;
		const loc2 = this.props.currLoc;
		const dLat = this.deg2rad(loc2.latitude - loc1.lat);
		const dLon = this.deg2rad(loc2.longitude - loc1.lon);
		const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.cos(this.deg2rad(loc1.lat)) * Math.cos(this.deg2rad(loc2.latitude)) *
			Math.sin(dLon/2) * Math.sin(dLon/2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		const d = R * c; // Distance in meter
		return this.round(d);
	}

	round = num => {
		let n = num * 10;
		n = Math.round(n);
		return n/10;
	}

	deg2rad = deg => {
		return deg * (Math.PI / 180)
	}

	open = () => {
		const url = "https://en.wikipedia.org/?curid=" + this.props.item.pageid;
		Linking.openURL(url)
	}

	render() {
		return (
			<View style={styles.article}>
				<TouchableOpacity onPress={this.open}>
					<Text style={styles.title}>{this.props.item.title}</Text>
					<Text>Distance: {this.calcDistance()}</Text>
				</TouchableOpacity>
				<ActionButton
					text={this.props.btnText}
					onClick={this.props.action}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	article: {
		borderRadius: 5,
		backgroundColor: "#fafafa",
		padding: 8,
		margin: 16
	},
	title: {
		color: 'blue',
		fontSize: 20,
		textAlign: "center",
		marginBottom: 10
	}
});
