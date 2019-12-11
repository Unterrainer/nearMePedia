import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import ScreenA from "./ScreenA/ScreenA"
import ScreenB from './ScreenB/ScreenB';
import ScreenC from './ScreensC/ScreenC';
import { Provider } from "unstated";

const ActionButton = ({ text, onClick }) => (
	<TouchableOpacity onPress={onClick}>
		<Text style={styles.actionButton}>{text}</Text>
	</TouchableOpacity>
)

const SearchBtnText = "Search for a location";
const SavedBtnText = "Open favorite locations";
const ReadingBtnText = "Open reading list";

export default class App extends React.Component {

	constructor() {
		super()
		this.state = {
			openScreen: 0
		}
	}

	render() {
		return (
			<Provider>

				<View style={styles.container}>
					{
						this.state.openScreen === 0 &&
						<View>
							<Text style={styles.title}>NearMePedia</Text>
							<View style={styles.buttonContainer}>
								<ActionButton text={SearchBtnText} onClick={() => { this.setState({ openScreen: 1 }) }}></ActionButton>
								<ActionButton text={SavedBtnText} onClick={() => { this.setState({ openScreen: 2 }) }}></ActionButton>
								<ActionButton text={ReadingBtnText} onClick={() => { this.setState({ openScreen: 3 }) }}></ActionButton>
							</View>
						</View>
					}

					{this.state.openScreen === 1 && <ScreenA style={styles.container}/>}
					{this.state.openScreen === 2 && <ScreenB style={styles.container}/>}
					{
						this.state.openScreen === 3 &&
						<ScreenC style={styles.container}/>
					}
					{this.state.openScreen !== 0 && <ActionButton style={styles.actionButton} text="Home" onClick={() => { this.setState({ openScreen: 0 }) }} />}
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: 'green',
	},
	title: {
		marginTop: 200,
		marginBottom: 50,
		textAlign: 'center',
		fontSize: 30,
		color: "red"
	},
	buttonContainer: {
	},
	actionButton: {
		padding: 15,
		margin: 16,
		backgroundColor: 'blue',
		textAlign: 'center',
		color: 'white',
		borderRadius: 5
	}
});
