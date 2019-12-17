import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import Article from "./Article";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions"

export default class ReadingList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currLoc: undefined
		}
		this.findAddress();
	}

	currentLocation = async () => {
		const { coords} = await Location.getCurrentPositionAsync();
		return { latitude: coords.latitude, longitude: coords.longitude };
	}

	findAddress = async () => {
		const { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status === "granted") {
			const location = await this.currentLocation();
			const addressList = await Location.reverseGeocodeAsync(location);
			if (addressList.length > 0)
				this.setState({
					currLoc: {
						...addressList[0],
						latitude: location.latitude,
						longitude: location.longitude
					}
				})
		}
	}

	render() {
		return (
			<View>
				{
					(!this.props.readingList || !this.props.readingList.length || !this.state.currLoc)
					? <Text style={styles.emptySet}>Add something to your Reading-list</Text>
					: <FlatList
						data={this.props.readingList}
						renderItem={
							({ item }) =>
								<Article
									item={item}
									btnText={"Remove from reading-list"}
									action={() => this.props.btnAction(item)}
									currLoc={this.state.currLoc}
								/>
						}
						keyExtractor={item => item.pageid.toString()}
					/>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	emptySet: {
		backgroundColor: "red",
		opacity: 0.2,
		borderRadius: 5,
		padding: 16,
		margin: 16,
		fontSize: 20,
		textAlign: "center"
	}
})
