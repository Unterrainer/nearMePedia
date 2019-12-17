import { PersistContainer } from "../mypersist";
import { AsyncStorage } from "react-native";

export default class LocationListContainer extends PersistContainer {

	state = {
		locationList: []
	};

	persist = {
		key: "locationList",
		storage: AsyncStorage,
	}

	getLocationList = () => this.state.locationList;

	removeLocation = location => {
		const newLocations = this.state.locationList.filter(
			loc => loc !== location
		);
		this.setState({locationList: newLocations});
	}

	addLocation = location => {
		const lList = this.state.locationList.filter(
			loc => loc === location
		)
		if (!lList || lList.length === 0)
			this.setState(prev => ({ locationList: [...prev.locationList, location] }));
	}
}
