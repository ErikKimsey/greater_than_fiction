import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

import color from '../assets/globals/colors';
import { fontList } from '../assets/fonts/retrieveFonts';

import { BackgroundStyles } from '../stylesheets/backgroundStyleSheet';
import { initGyro, getGyroData } from '../utilities/gyroColorMapping';
import brainbulb from '../assets/up_arrows.png';

export default class Landing extends Component {
	state = {
		fontLoaded: false
	};

	async componentDidMount() {
		await Font.loadAsync({
			'lemon-milk': require('../assets/fonts/LemonMilk.otf'),
			dayrom: require('../assets/fonts/DAYROM.ttf'),
			painterz: require('../assets/fonts/Painterz.ttf'),
			cubesity: require('../assets/fonts/cubesity.ttf'),
			fatC: require('../assets/fonts/FatC.ttf'),
			fatCat: require('../assets/fonts/FatCat.ttf'),
			slukoni: require('../assets/fonts/Slukoni.otf')
		});
		this.setState({ fontLoaded: true });
		// console.log(BackgroundStyles(200));
		// console.log('initing gyro from Landing');
		// console.log(initGyro());
		// console.log(getGyroData());

		// BackgroundStyles().backgroundContainer.logProps(200);
	}

	handleGo = () => {
		this.props.navigation.navigate('Go');
	};

	render() {
		return (
			<ImageBackground source={brainbulb} style={[ styles.image, { width: '100%', height: '120%' } ]}>
				<View style={styles.container}>
					{this.state.fontLoaded ? (
						<View>
							<View>
								<Text style={[ { fontFamily: 'cubesity', color: color.softRed }, styles.header100 ]}>
									100
								</Text>
								<Text style={[ { fontFamily: 'cubesity', color: color.softRed }, styles.headerWords ]}>
									W3rds
								</Text>
								<Text style={[ styles.subHeader_1, { fontFamily: 'lemon-milk' } ]}>
									Scientifically proven, by SoftBodySocial Inc. (while on stimulants), to kill
									creative-block.
								</Text>
								{/* <Text style={[ styles.subHeader_2, { fontFamily: 'lemon-milk' } ]}>
								Your Goal: {'\n'} Break your block in 100 words {'\n'} and 5 minutes.
							</Text> */}
							</View>
							<View style={styles.buttonContainer}>
								<TouchableOpacity
									style={styles.button}
									onPress={this.handleGo}
									activeOpacity={0.8}
									accessibilityLabel="Go, write!"
								>
									<Text style={[ styles.buttonText, { fontFamily: 'lemon-milk' } ]}>Get Set.</Text>
								</TouchableOpacity>
							</View>
							{/* <Button
								title="Get set..."
								onPress={this.handleGo}
								color={color.Plum}
								accessibilityLabel="Go, write!"
							/> */}
						</View>
					) : null}
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	image: {
		backgroundColor: color.Gray
	},
	container: {
		flex: 1,
		height: 400,
		// backgroundColor: color.Gold,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	header100: {
		textAlign: 'center',
		fontSize: 186,
		color: color.Yellow
	},
	headerWords: {
		paddingTop: 0,
		marginTop: 0,
		textAlign: 'center',
		color: color.Yellow,
		fontSize: 96,
		opacity: 0.9
	},
	subHeader_1: {
		width: 377,
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 16,
		color: color.Gold,
		padding: 16,
		opacity: 0.8,
		marginBottom: 100
	},
	buttonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 0,
		width: '90%'
	},
	button: {
		// position: 'absolute',
		alignItems: 'center',
		backgroundColor: color.softRed,
		// marginBottom: 10,
		paddingLeft: 50,
		paddingRight: 50,
		bottom: 0
	},
	buttonText: {
		color: color.Gold,
		fontSize: 18,
		padding: 10
	}
});
