import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import color from './assets/globals/colors.js';

console.log(color);

export default class App extends React.Component {
	state = {
		fontLoaded: false
	};

	async componentDidMount() {
		await Font.loadAsync({
			'lemon-milk': require('./assets/fonts/LemonMilk.otf'),
			dayrom: require('./assets/fonts/DAYROM.ttf')
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{this.state.fontLoaded ? (
					<Text style={{ fontFamily: 'dayrom', fontSize: 56 }}>Hello, world!</Text>
				) : null}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
