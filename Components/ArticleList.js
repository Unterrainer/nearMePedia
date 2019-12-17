import React from "react";
import { FlatList, Text, View, StyleSheet, ActivityIndicator } from "react-native";
import Article from "./Article";
import { getLocationFromAddress } from "../Utils/myLocation"

export default class ArticleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			location: {latitude: "", longitude: ""},
			results: []
		}
	}

	componentDidMount() {
		this.fetchResults();
	}

	setResults = response => {
		this.setState({ loading: false, results: response.query.geosearch });
	}

	fetchResults = async () => {
		this.setState({loading: true});
		var url = "https://en.wikipedia.org/w/api.php";

		const addressResults = await getLocationFromAddress(this.props.address);

		if (addressResults && addressResults.length) {
			const address = addressResults[0];
			this.setState({
				location: {
					latitude: address.latitude,
					longitude: address.longitude
				}
			});
			const loc = address.latitude + "|" + address.longitude;

			var params = {
				action: "query",
				list: "geosearch",
				gscoord: loc,
				gsradius: "10000",
				format: "json"
			};

			url = url + "?origin=*";
			Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

			fetch(url)
				.then(function(response){return response.json();})
				.then(response => this.setResults(response))
				.catch(function(error){console.log(error);});
		}
	}

	render() {
		const noResults = this.state.loading
			? <ActivityIndicator size="large" color="#0000ff"/>
			: <Text style={styles.emptySet}>No results for this location</Text>;
		return (
			<View>
				{
					this.state.results && this.state.results.length
					? <FlatList
						data={this.state.results}
						renderItem={
							({ item }) =>
								<Article
									item={item}
									btnText={this.props.btnText}
									action={() => this.props.btnAction(item)}
									currLoc={this.state.location}
								/>
						}
						keyExtractor={item => item.pageid.toString()}
					/>
					: <View>{ noResults }</View>
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
});
