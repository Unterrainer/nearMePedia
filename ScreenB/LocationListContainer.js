import { PersistContainer } from "../mypersist";
import { AsyncStorage } from "react-native";

export default class LocationListContainer extends PersistContainer {
	constructor(props) {
		super(props);
		this.state = {
			locationList: []
		};
	}
}
