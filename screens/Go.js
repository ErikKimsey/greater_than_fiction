import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import brainbulb from '../assets/cartographer.png';
import color from '../assets/globals/colors';
import * as Font from 'expo-font';
import goInstructions from '../assets/GoDialog';
import Prompt from '../components/Prompt/Prompt';

export default class Go extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prompt: '',
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

	getPrompts = (prompts) => {
		this.setState({ prompt: prompts });
	};

	clearPromptArray = () => {
		this.setState({ prompt: this.state.prompt.splice(0) });
	};

	render() {
		return (
			<ImageBackground
				source={brainbulb}
				style={[ { width: '100%', height: '120%', backgroundColor: color.mattPurple } ]}
			>
				<View style={styles.container}>
					{this.state.fontLoaded ? (
						<View>
							<View>
								<Text style={[ { fontFamily: 'lemon-milk' }, styles.instructions ]}>
									{this.state.instructions}
								</Text>
								<View style={styles.buttonContainer}>
									<TouchableOpacity
										style={styles.button}
										onPress={this.onPressGo}
										activeOpacity={0.8}
										accessibilityLabel="Go, write!"
									>
										<Text style={[ styles.buttonText, { fontFamily: 'lemon-milk' } ]}>Go!</Text>
									</TouchableOpacity>
								</View>
								<Text style={[ styles.prompt, { fontFamily: 'slukoni' } ]}>Your prompt:</Text>
								<Text style={[ styles.prompt_2, { fontFamily: 'slukoni' } ]}>Your prompt:</Text>
								<Prompt getPrompts={this.getPrompts} />
								<Text style={[ styles.prompt, { fontFamily: 'lemon-milk', color: '#ffffff' } ]} />
							</View>
						</View>
					) : null}
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 500,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	prompt: {
		color: color.popnPurple,
		fontSize: 52,
		textAlign: 'center',
		alignItems: 'center',
		textShadowColor: color.pastelBlueWhite,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10
	},
	prompt_2: {
		color: color.Yellow,
		fontSize: 52,
		position: 'absolute',
		top: 222,
		left: 22,
		textAlign: 'center',
		color: color.Yellow,
		zIndex: 10,
		opacity: 0.4
	},
	instructions: {
		width: 377,
		color: color.pastelBlueWhite,
		lineHeight: 24,
		marginTop: 0,
		padding: 16,
		top: 10,
		fontSize: 20,
		textAlign: 'center'
	},
	buttonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		// position: 'absolute',
		top: 236,
		// bottom: 0,
		width: '100%'
	},
	button: {
		alignItems: 'center',
		backgroundColor: 'transparent',
		paddingLeft: 50,
		paddingRight: 50,
		bottom: 0,
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
