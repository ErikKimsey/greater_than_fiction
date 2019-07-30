import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

import color from '../assets/globals/colors';
import { fontList } from '../assets/fonts/retrieveFonts';

import { initGyro, getGyroData } from '../utilities/gyroColorMapping';

import TransparentButton from '../components/buttons/transparentButton';
import brainbulb from '../assets/cartographer.png';
import werdsLogo from '../assets/100_werds.png';

export default class Landing extends Component {
	state = {
		fontLoaded: false
	};

	async componentDidMount() {
		await Promise.all([
			Font.loadAsync({
				'lemon-milk': require('../assets/fonts/LemonMilk.otf'),
				dayrom: require('../assets/fonts/DAYROM.ttf'),
				painterz: require('../assets/fonts/Painterz.ttf'),
				cubesity: require('../assets/fonts/cubesity.ttf'),
				fatC: require('../assets/fonts/FatC.ttf'),
				fatCat: require('../assets/fonts/FatCat.ttf'),
				slukoni: require('../assets/fonts/Slukoni.otf')
			})
		]).then((res) => {
			this.setState({ fontLoaded: true });
		});
	}

	handleGo = () => {
		this.props.navigation.navigate('Go');
	};

	render() {
		return (
			<ImageBackground
				source={brainbulb}
				style={[
					styles.image,
					{ width: '100%', height: '120%', backgroundColor: color.mattPurple },
					styles.container
				]}
			>
				{this.state.fontLoaded ? (
					<View style={styles.subContainer}>
						<Image source={werdsLogo} style={[ { width: 400, height: 261, left: 14 } ]} />

						<Text style={[ styles.subHeader_1, { fontFamily: 'lemon-milk' } ]}>
							Scientifically proven, by SoftBodySocial Inc. (while on stimulants), to kill creative-block.
						</Text>

						<TransparentButton
							pressBtn={this.handleGo}
							btnLabel="Get set"
							accessLabel="Get set"
							btnFont="lemon-milk"
						/>
					</View>
				) : null}
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	subContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		opacity: 1
	},
	subHeader_1: {
		width: 377,
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 16,
		color: color.pastelBlueWhite,
		padding: 16,
		opacity: 0.8,
		marginBottom: 100,
		textShadowColor: color.pastelBlueWhite,
		textShadowRadius: 3
	},
	buttonContainer: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		top: 500,
		width: '100%'
	},
	button: {
		alignItems: 'center',
		backgroundColor: 'transparent',
		paddingLeft: 50,
		paddingRight: 50,
		bottom: 40,
		borderWidth: 1,
		borderColor: color.pastelBlueWhite,
		borderRadius: 5
	},
	buttonText: {
		color: color.pastelBlueWhite,
		fontSize: 18,
		padding: 10
	}
});
