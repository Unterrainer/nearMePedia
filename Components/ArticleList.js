import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import Article from "./Article";
import * as Location from "expo-location";

export default class ArticleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: {latitude: "", longitude: ""},
			results: []
		}
		this.fetchResults();
	}

	setResults = response => {
		this.setState({results: response.query.geosearch});
	}

	fetchResults = async () => {
		var url = "https://en.wikipedia.org/w/api.php";

		const addressResults = await Location.geocodeAsync(this.props.address);

		if (addressResults && addressResults.length) {
			const address = addressResults[0];
			this.setState({
				latitude: address.latitude,
				longitude: address.longitude
			});
			const loc = address.latitude + "|" + address.longitude;
			console.log(loc);

			var params = {
				action: "query",
				list: "geosearch",
				gscoord: loc,
				// gscoord: "46.510725|11.266791",
				gsradius: "10000",
				// gslimit: "10",
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
					: <Text style={styles.emptySet}>No results for this location</Text>
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
