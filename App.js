import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
	state = {
		fontLoaded: false
	};

	async componentDidMount() {
		await Font.loadAsync({
			'lemon-milk': require('./assets/fonts/LemonMilk.otf'),
			timeless: require('./assets/fonts/Timeless.ttf')
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{this.state.fontLoaded ? (
					<Text style={{ fontFamily: 'lemon-milk', fontSize: 56 }}>Hello, world!</Text>
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
