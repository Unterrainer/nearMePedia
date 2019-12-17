import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ActionButton from "./ActionButton";
import { askForPermission } from  "../Utils/myLocation";


export default class RootComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			permissions: false
		}
		this.setPermissions();
	}

	setPermissions = async () => {
		const status = await askForPermission();
		this.setState({ permissions: status === "granted" })
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>NearMePedia</Text>
				{
					this.state.permissions
					? <View>
						<ActionButton
							text={"Search for articles"}
							onClick={() => this.props.navigateTo("SearchArticles")}
						/>
						<ActionButton
							text={"Favorite Locations"}
							onClick={() => this.props.navigateTo("FavoriteLocations")}
						/>
						<ActionButton
							text={"Reading list"}
							onClick={() => this.props.navigateTo("ReadingList")}
						/>
					</View>
					: <View>
						<Text style={styles.noPermission}>No permissions to access your location</Text>
						<ActionButton
							text="Ask again for permission"
							onClick={() => this.setPermissions()}
						/>
					</View>
				}

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center"
	},
	title: {
		fontSize: 32,
		textAlign: "center",
		marginBottom: 100,
	},
	noPermission: {
		padding: 15,
		margin: 15,
		borderRadius: 5,
		backgroundColor: "red",
		fontSize: 18,
		opacity: 0.1
	}
});
