import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Subscribe } from "unstated";
import LocationListContainer from "./LocationListContainer";

export default class ScreenB extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<View>
				<Text style={styles.title}>Favorite locations</Text>
				<Subscribe to={[LocationListContainer]}>{
					container => (
						<View>
							{
							!container.state.locationList || container.state.locationList.lenght === 0
								? <Text>Add some Locations</Text>
								: <Text>There are some locations</Text>
							}
						</View>
					)
				}
				</Subscribe>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		textAlign: "center",
		fontSize: 20,

	}
});
