import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

/**
 * Ask the user for the permissions of the location.
 */
async function askForPermission() {
	const { status } = await Permissions.askAsync(Permissions.LOCATION);
	return status;
}

/**
 * Returns the nearest Location (Latitude/Longitude) from the given address.
 * @param {*} address
 */
async function getLocationFromAddress(address) {
	const addrList = await Location.geocodeAsync(address);
	return addrList;
}

/**
 * Returns the nearest address of the given location (Latitude/Longitude).
 * @param {*} location
 */
async function findAddress(location) {
	const status = await askForPermission();
	if (status === "granted") {
		const addressLocation = { latitude: parseFloat(location.latitude), longitude: parseFloat(location.longitude)};
		const addressList = await Location.reverseGeocodeAsync(addressLocation);
		if (addressList && addressList.length)
			return addressList[0];
	}
	return null;
}

/**
 * Returns the current coordinations of the device.
 */
async function getCurrentCoords() {
	const { coords } = await Location.getCurrentPositionAsync();
	return coords;
}

/**
 * Returns the current address of the device.
 */
async function getCurrentAddress() {
	const coords = await getCurrentCoords();
	const address = await findAddress(coords);
	return {...address, ...coords};
}

export { askForPermission, getLocationFromAddress, findAddress, getCurrentAddress }
