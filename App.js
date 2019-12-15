import React from 'react';
import { Provider } from "unstated";
import RootComponentScreen from './RootComponentScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './ScreenA/SearchScreen';
import ResultListScreen from './ResultListScreen';
import FavoriteLocationScreen from './FavoriteLocationScreen';
import AddLocationScreen from './AddLocationScreen';
import ReadingListScreen from './ReadingListScreen';

const stackRoutes = {
	Overview: RootComponentScreen,
	SearchArticles: SearchScreen,
	Results: ResultListScreen,	// Nicht direkt machen sondern über screen
	FavoriteLocations: FavoriteLocationScreen,
	AddLocation: AddLocationScreen,
	ReadingList: ReadingListScreen
}

const stackOptions = {
	initialRouteName: "Overview"
}

const AppNavigator = createStackNavigator(stackRoutes, stackOptions);
const AppContainer = createAppContainer(AppNavigator);


const App = props => (
	<Provider>
		<AppContainer/>
	</Provider>

)

export default App
