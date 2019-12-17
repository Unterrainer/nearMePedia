import React from 'react';
import { Provider } from "unstated";
import RootComponentScreen from './Screens/RootComponentScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './Screens/SearchScreen';
import ResultListScreen from './Screens/ResultListScreen';
import FavoriteLocationScreen from './Screens/FavoriteLocationScreen';
import AddLocationScreen from './Screens/AddLocationScreen';
import ReadingListScreen from './Screens/ReadingListScreen';

const stackRoutes = {
	Overview: RootComponentScreen,
	SearchArticles: SearchScreen,
	Results: ResultListScreen,
	FavoriteLocations: FavoriteLocationScreen,
	AddLocation: AddLocationScreen,
	ReadingList: ReadingListScreen
}

const stackOptions = {
	initialRouteName: "Overview"
}

const AppNavigator = createStackNavigator(stackRoutes, stackOptions);
const AppContainer = createAppContainer(AppNavigator);


const App = () => (
	<Provider>
		<AppContainer/>
	</Provider>
)

export default App
