import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import color from '../assets/globals/colors';

export default class About extends Component {
	state = {
		fontLoaded: false
	};

	async componentDidMount() {
		await Font.loadAsync({
			'lemon-milk': require('../assets/fonts/LemonMilk.otf'),
			dayrom: require('../assets/fonts/DAYROM.ttf'),
			slukoni: require('../assets/fonts/Slukoni.otf')
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		if (this.state.fontLoaded) {
			return (
				<View style={styles.container}>
					<Text style={[ { fontFamily: 'slukoni', fontSize: 76 }, styles.header ]}>About</Text>
					<Text style={[ { fontFamily: 'lemon-milk' }, styles.paragraph ]}>
						100 Words by Erik Kimsey hoping to impress Novelly.
					</Text>
					<Text style={[ { fontFamily: 'lemon-milk' }, styles.paragraph ]}>erikkimsey.com</Text>
				</View>
			);
		} else {
			return null;
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.gray,
		color: color.softRed
	},
	header: {
		color: color.softRed
	},
	paragraph: {
		color: '#000000',
		fontSize: 22,
		margin: 20,
		textAlign: 'center',
		paddingTop: 0,
		paddingBottom: 0
	}
});
