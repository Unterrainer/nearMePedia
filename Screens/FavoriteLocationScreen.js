import React from "react";
import ScreenB from "../Components/ScreenB";
import { Subscribe } from "unstated";
import LocationListContainer from "../Containers/LocationListContainer";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions"

const FavoriteLocationScreen = props => {

	const currentLocation = async () => {
		const { coords} = await Location.getCurrentPositionAsync();
		return { latitude: coords.latitude, longitude: coords.longitude };
	}

	const findAddress = async () => {
		const { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status === "granted") {
			const location = await currentLocation();
			const addressList = await Location.reverseGeocodeAsync(location);
			if (addressList.length > 0)
				return {
					...addressList[0],
					latitude: location.latitude,
					longitude: location.longitude
				}
		}
		return null;
	}

	const addCurrent = async container => {
		const location = await findAddress();
		if (location)
			container.addLocation(location);
	}

	const openCurrent = async () => {
		const location = await findAddress();
		props.navigation.navigate(
			"Results",
			{
				location: {longitude: location.longitude, latitude: location.latitude}
			}
		)
	}

	const open = location => {
		props.navigation.navigate(
			"Results",
			{
				location: {longitude: location.longitude, latitude: location.latitude}
			}
		)
	}

	return (
		<Subscribe to={[LocationListContainer]}>{
			container => (
				<ScreenB
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
