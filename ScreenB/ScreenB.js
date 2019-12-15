import React from "react";
import { View, Text, FlatList } from "react-native";
import NavigationButton from "../NavigationButton";
import Location from "../Location";
import ActionButton from "../ActionButton";

export default class ScreenB extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: props.locations
		}
	}

	render() {
		return (
			<View>
				<NavigationButton
					text="Add new Location"
					navigate={() => this.props.navigateTo("AddLocation")}
				/>
				<ActionButton
					text="Add current Location"
					onClick={() => this.props.addCurrent()}
				/>
				<ActionButton
					text="Search for articles at current location"
					onClick={() => this.props.openCur()}
				/>

				<View>
					{
					(!this.props.locations || this.props.locations.length === 0)
						? <Text>Add some Locations</Text>
						: <FlatList
							data={this.props.locations}
							renderItem={
								({ item }) =>
									<Location
										location={item}
										remove={() => this.props.remove(item)}
										open={() => this.props.openLoc(item)}
									/>
							}
							keyExtractor={item => item.longitude.toString()}
						/>
					}
				</View>
			</View>
		)
	}
}
