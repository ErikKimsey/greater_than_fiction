import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import color from '../assets/globals/colors';
import bkgrd from '../assets/abstract.png';

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
			lipstick: require('../assets/fonts/lipstick.ttf'),
			cubesity: require('../assets/fonts/cubesity.ttf'),
			fatC: require('../assets/fonts/FatC.ttf'),
			fatCat: require('../assets/fonts/FatCat.ttf'),
			slukoni: require('../assets/fonts/Slukoni.otf'),
			blowing: require('../assets/fonts/BlowingBubble.ttf'),
			drip: require('../assets/fonts/adrip.ttf')
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		return (
			// <ImageBackground source={bkgrd} style={styles.image}>
			<View style={styles.container}>
				{this.state.fontLoaded ? (
					<View>
						<Text style={[ { fontFamily: 'slukoni', color: color.softRed }, styles.header100 ]}>100</Text>
						<Text style={[ { fontFamily: 'slukoni', color: color.softRed }, styles.headerWords ]}>
							Words
						</Text>
						<Text style={[ styles.subHeader, { fontFamily: 'lemon-milk' } ]}>
							Tell a story in 100 words.
						</Text>
					</View>
				) : null}
			</View>
			// </ImageBackground>
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
	image: {
		zIndex: -1,
		backgroundColor: color.gray
	},
	header100: {
		textAlign: 'center',
		fontSize: 186
		// marginBottom: -10,
		// paddingBottom: -10
	},
	headerWords: {
		paddingTop: 0,
		marginTop: 0,
		textAlign: 'center',
		fontSize: 96
	},
	subHeader: {
		textAlign: 'center',
		fontSize: 20
	}
});
