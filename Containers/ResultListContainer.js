import { PersistContainer } from "../mypersist";
import { AsyncStorage } from "react-native";

export default class ResultListContainer extends PersistContainer {
	constructor(props) {
		super(props);
		this.state = {
			resultList: []
		};
	}

	persist = {
		key: "resultList",
		storage: AsyncStorage,
		init: []
	}

	getResultList = () => this.state.resultList;

	setResultList = resultList => this.setState({resultList: resultList});

	clearResultList = () => this.setState({resultList: []});
}
