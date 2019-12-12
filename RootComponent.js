import React from "react";
import { Text, View } from "react-native";
import NavivationButton from "./NavigationButton";

export default class RootComponent extends React.Component {
	constructor() {
		super();
	}

	navigateTo = link => this.props.navigation.navigate(link)

	render() {
		return(
			<View>
				<Text>Hallo</Text>
				<NavivationButton
					text={"Search for articles"}
					navigate={() => this.navigateTo("SearchArticles")}
				/>
			</View>
		);
	}
}

RootComponent.navigationOptions = {title: "Test"}
