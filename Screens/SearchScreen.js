import React from "react";
import ScreenA from "../Components/ScreenA";

const SearchScreen = props => {
	return (
		<ScreenA navigateTo={(long, lat) => props.navigation.navigate(
			"Results",
			{
				location: {longitude: long, latitude: lat}
			}
		)}/>
	);
}

ScreenA.navigationOptions = {title: "Search"}

export default SearchScreen;
