import { PersistContainer } from "../mypersist";
import { AsyncStorage } from "react-native";

export default class ReadingListContainer extends PersistContainer {
	constructor(props) {
		super(props);
		this.state = {
			readingList: []
		};
	}

	persist = {
		key: "readingList",
		storage: AsyncStorage,
		init: []
	}

	getReadingList = () => this.state.readingList;

	removeArticle = article => {
		const newReadingList = this.state.readingList.filter(
			a => a.pageid !== article.pageid
		);
		this.setState({readingList: newReadingList});
	}

	addArticle = article => {
		const aList = this.state.readingList.filter(
			a => a.pageid === article.pageid
		);
		if (!aList || aList.length === 0) {
			const l = this.state.readingList;
			this.setState({readingList: [...l, article]});
		}
		console.log(article.title);
		console.log(this.state.readingList);
	}
}
