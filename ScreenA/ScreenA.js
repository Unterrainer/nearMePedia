import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import ArticleList from "../ArticleList/ArticleList";
import ActionButton from "../ActionButton";

export default class ScreenA extends React.Component {

	constructor() {
		super();
		this.state = {
			long: "46.510725",
			lat: "11.266791",
			results: []
		}
	}

	setResults = response => {
		this.setState({results: response.query.geosearch});
	}

	search() {
		var url = "https://en.wikipedia.org/w/api.php";

		const address = this.state.long && this.state.lat
			? this.state.long + "|" + this.state.lat
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

	updateLongitude = loc => {
		this.setState({
			long: loc,
			address: ""
		});
	}

	updateLattitude = loc => {
		this.setState({
			lat: loc,
			address: ""
		});
	}

	render() {
		return (
			<View style={styles.container}>
				{
					this.state.results && this.state.results.length &&
					<ArticleList
						results={this.state.results}
						btnText={"Add to reading-list"}
						action={"add"}
					></ArticleList>
					||
					<View>
						<Text style={styles.text}>Enter Coordinates to find some near locations:</Text>
						<TextInput style={styles.input} placeholder="Longitude" onChangeText={this.updateLongitude}></TextInput>
						<TextInput style={styles.input} placeholder="Lattitude" onChangeText={this.updateLattitude}></TextInput>
						{/* <Button style={styles.button} title="Search" onPress={() => this.search()}></Button> */}
						<ActionButton text="Search" onClick={() => this.search()}/>
					</View>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		margin: 8,
		padding: 8
	},
	input: {
		marginTop: 20,
		marginBottom: 20
	},
	text: {
		textAlign: 'center',
		fontSize: 20
	},
	button: {
		backgroundColor: 'blue'
	}
});
