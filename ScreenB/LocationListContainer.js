import { PersistContainer } from "../mypersist";
import { AsyncStorage } from "react-native";

export default class LocationListContainer extends PersistContainer {
	constructor(props) {
		super(props);
		this.state = {
			locationList: []
		};
	}

	persitst = {
		key: "locationList",
		storage: AsyncStorage,
		init: []
	}

	getLocationList = () => this.state.locationList;

	removeLocation = location => {
		const newLocations = this.state.locationList.filter(
			loc => loc !== location
		);
		this.setState({locationList: newLocations});
	}

	addLocation = location => {
		this.setState(prev => ({locationList: [...prev.locationList, location]}));
	}
}
