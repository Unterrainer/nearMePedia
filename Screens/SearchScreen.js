import React from "react";
import SearchComponent from "../Components/SearchComponent";

const SearchScreen = props => {
	return (
		<SearchComponent navigateTo={add => props.navigation.navigate(
			"Results",
			{
				address: add
			}
		)}/>
	);
}

SearchScreen.navigationOptions = {title: "Search"}

export default SearchScreen;
