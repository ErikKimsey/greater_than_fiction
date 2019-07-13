import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import color from '../assets/globals/colors';
import bkgrd from '../assets/handwriting.jpg';

export default class Landing extends Component {
	state = {
		fontLoaded: false
	};

	async componentDidMount() {
		await Font.loadAsync({
			'lemon-milk': require('../assets/fonts/LemonMilk.otf'),
			dayrom: require('../assets/fonts/DAYROM.ttf'),
			timeless: require('../assets/fonts/Timeless.ttf'),
			painterz: require('../assets/fonts/Painterz.ttf'),
			rockness: require('../assets/fonts/Rockness.ttf'),
			lipstick: require('../assets/fonts/lipstick.ttf')
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.fontLoaded ? (
					<View>
						<Text style={[ { fontFamily: 'painterz', color: color.softRed }, styles.header ]}>
							100 Words
						</Text>
						<Text style={[ styles.subHeader, { fontFamily: 'lemon-milk' } ]}>
							Tell a story in 100 words.
						</Text>
					</View>
				) : null}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.gray,
		alignItems: 'center',
		justifyContent: 'center',
		color: color.softRed
	},
	header: {
		textAlign: 'center',
		fontSize: 116
	},
	subHeader: {
		textAlign: 'center',
		fontSize: 20
	}
});
