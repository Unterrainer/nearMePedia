import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import Article from "./Article";
import { getCurrentAddress } from "../Utils/myLocation";

export default class ReadingList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: undefined
		}
		this.setAddress();
	}

	setAddress = async () => {
		const addr = await getCurrentAddress();
		this.setState({ address: addr});
	}

	render() {
		return (
			<View>
				{
					(!this.props.readingList || !this.props.readingList.length || !this.state.address)
					? <Text style={styles.emptySet}>Add something to your Reading-list</Text>
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
