import React from "react";
import { Text, FlatList, View, StyleSheet, ActivityIndicator } from "react-native";
import Article from "./Article";
import { getCurrentAddress } from "../Utils/myLocation";

export default class ReadingList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			laoding: false,
			address: undefined
		}
	}

	componentDidMount() {
		this.setAddress();
	}

	setAddress = async () => {
		this.setState({loading: true});
		const addr = await getCurrentAddress();
		this.setState({ loading: false, address: addr});
	}

	render() {
		const noResults = this.state.loading
			? <ActivityIndicator size="large" color="#0000ff"/>
			: <Text style={styles.emptySet}>Add something to your Reading-list</Text>;
		return (
			<View>
				{
					(!this.props.readingList || !this.props.readingList.length || !this.state.address)
					? <View>{ noResults }</View>
					: <FlatList
						data={this.props.readingList}
						renderItem={
							({ item }) =>
								<Article
									item={item}
									btnText={"Remove from reading-list"}
									action={() => this.props.btnAction(item)}
									currLoc={this.state.address}
								/>
						}
						keyExtractor={item => item.pageid.toString()}
					/>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	emptySet: {
		backgroundColor: "red",
		opacity: 0.2,
		borderRadius: 5,
		padding: 16,
		margin: 16,
		fontSize: 20,
		textAlign: "center"
	}
})
