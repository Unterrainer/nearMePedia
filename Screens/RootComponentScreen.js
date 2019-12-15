import React from "react";
import RootComponent from "../Components/RootComponent";

const RootComponentScreen = props => {
	return (
		<RootComponent navigateTo={(link) => props.navigation.navigate(link)}/>
	)
}

RootComponentScreen.navigationOptions = {title: "Home"}

export default RootComponentScreen;
