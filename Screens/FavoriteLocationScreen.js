import React from "react";
import FavoriteLocations from "../Components/FavoriteLocations";
import { Subscribe } from "unstated";
import LocationListContainer from "../Containers/LocationListContainer";
import { getCurrentAddress } from "../Utils/myLocation";

const FavoriteLocationScreen = props => {

	const addCurrent = async container => {
		const location = await getCurrentAddress();
		if (location)
			container.addLocation(location);
	}

	const openCurrent = async () => {
		const location = await getCurrentAddress();
		props.navigation.navigate(
			"Results",
			{
				address: location.street + " " + location.name + ", " + location.city
			}
		)
	}

	const open = location => {
		props.navigation.navigate(
			"Results",
			{
				address: location.street + " " + location.name + ", " + location.city
			}
		)
	}

	return (
		<Subscribe to={[LocationListContainer]}>{
			container => (
				<FavoriteLocations
					locations={container.state.locationList}
					navigateTo={(link) => props.navigation.navigate(link)}
					remove={(location) => container.removeLocation(location)}
					addCurrent={() => addCurrent(container)}
					openCur={() => openCurrent()}
					openLoc={(loc) => open(loc)}
				/>
			)
		}
		</Subscribe>
	)
}

FavoriteLocationScreen.navigationOptions = {title: "Favorite Locations"}

export default FavoriteLocationScreen;
