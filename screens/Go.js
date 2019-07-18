import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import abstract from '../assets/abstract.png';
import color from '../assets/globals/colors';
import axios from 'axios';
import * as Font from 'expo-font';
import goInstructions from '../assets/GoDialog';
import Prompt from '../components/Prompt/Prompt';

export default class Go extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prompt: 'YOYOYOYO',
			instructions: '',
			fontLoaded: false
		};
	}

	async componentDidMount() {
		this.setState({ instructions: goInstructions });
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
	}

	onPressGo = () => {
		this.props.navigation.navigate('TextEditor', {
			prompt: this.state.prompt
		});
	};

	render() {
		return (
			<ImageBackground source={abstract} style={[ styles.container, { width: '100%', height: '100%' } ]}>
				{this.state.fontLoaded ? (
					<View style={styles.subContainer}>
						<Text style={[ { fontFamily: 'lemon-milk', color: color.softRed }, styles.instructions ]}>
							{this.state.instructions}
						</Text>
						<Text>Your prompt:</Text>
						<Prompt />
						<Text style={[ { fontFamily: 'lemon-milk', color: color.softRed }, styles.prompt ]} />
						<Button
							title="Go!"
							color={color.softRed}
							onPress={this.onPressGo}
							style={[ styles.button ]}
							accessibilityLabel="Go, write!"
						/>
					</View>
				) : null}
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.gray,
		flex: 1
	},
	subContainer: {
		flex: 1,
		padding: 10,
		margin: 20,
		top: 10,
		backgroundColor: 'rgba(255,255,255,0.2)'
	},
	prompt: {
		color: color.softRed,
		marginTop: 10,
		height: '30%',
		// backgroundColor: color.softRed,
		marginBottom: 10,
		fontSize: 18
	},
	instructions: {
		color: '#ffffff',
		height: '40%',
		// backgroundColor: color.softRed,
		marginBottom: 10,
		marginTop: 90,
		fontSize: 18
	},
	button: {
		color: color.softRed,
		padding: 10
		// marginBottom: 10
	}
});
