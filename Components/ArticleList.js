import React from "react";
import { FlatList, Text, View } from "react-native";
import Article from "./Article";

export default class ArticleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: props.location,
			results: []
		}
		this.fetchResults();
	}

	setResults = response => {
		this.setState({results: response.query.geosearch});
	}

	fetchResults = () => {
		var url = "https://en.wikipedia.org/w/api.php";

		const address = this.state.location.longitude && this.state.location.latitude
			? this.state.location.latitude + "|" + this.state.location.longitude
			: "";

		var params = {
			action: "query",
			list: "geosearch",
			gscoord: address,
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
					: <Text>No results for this location</Text>
				}
			</View>
		)
	}
}
