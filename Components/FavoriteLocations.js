import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Location from "./Location";
import ActionButton from "./ActionButton";


const FavoriteLocations = props => (
	<View style={styles.container}>
		<View>
			<ActionButton
				text="Add new Location"
				onClick={() => props.navigateTo("AddLocation")}
			/>
			<ActionButton
				text="Add current Location"
				onClick={() => props.addCurrent()}
			/>
			<ActionButton
				text="Search for articles at current location"
				onClick={() => props.openCur()}
			/>
		</View>

		{
		(!props.locations || props.locations.length === 0)
			? <Text style={styles.emptySet}>Add some Locations</Text>
			: <FlatList
				data={props.locations}
				renderItem={
					({ item }) =>
						<Location
							location={item}
							remove={() => props.remove(item)}
							open={() => props.openLoc(item)}
						/>
				}
				keyExtractor={item => item.longitude.toString()}
			/>
		}
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	emptySet: {
		backgroundColor: "red",
		opacity: 0.2,
		borderRadius: 5,
		padding: 16,
		margin: 16,
		fontSize: 20,
		textAlign: "center"
	}
});

export default FavoriteLocations;
