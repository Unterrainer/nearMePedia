import React from "react";
import AddLocation from "./AddLocation";
import { Subscribe } from "unstated";
import LocationListContainer from "./ScreenB/LocationListContainer";

const AddLocationScreen = props => {
	const addLocation = (container, location) => {
		container.addLocation(location);
		props.navigation.navigate("FavoriteLocations")
	}

	return (
		<Subscribe to={[LocationListContainer]}>{
			container => (
				<AddLocation
					btnAction={
						(location) => addLocation(container, location)
					}
				/>
			)
		}
		</Subscribe>
	);
}

AddLocationScreen.navigationOptions = {title: "Add location"}

export default AddLocationScreen;
