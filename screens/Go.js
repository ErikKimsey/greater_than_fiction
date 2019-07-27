import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';
import brainbulb from '../assets/cartographer.png';
import color from '../assets/globals/colors';
import * as Font from 'expo-font';
import goInstructions from '../assets/GoDialog';
import Prompt from '../components/Prompt/Prompt';

import promptImg from '../assets/prompt.png';

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
		console.log(this.state.prompt);
		this.props.navigation.navigate('TextEditor', {
			prompt: this.state.prompt
		});
	};

	getPrompts = (prompts) => {
		console.log(prompts);

		this.setState({ prompt: prompts });
	};

	clearPromptArray = () => {
		this.setState({ prompt: this.state.prompt.splice(0) });
	};

	render() {
		return (
			<ImageBackground
				source={brainbulb}
				style={[ { width: '100%', height: '120%', backgroundColor: color.mattPurple }, styles.container ]}
			>
				{/* <View style={styles.container}> */}
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
									accessibilityLabel="Go screen!"
								>
									<Text style={[ styles.buttonText, { fontFamily: 'lemon-milk' } ]}>Go!</Text>
								</TouchableOpacity>
							</View>
							<Image source={promptImg} style={[ { width: 380, height: 60 } ]} />
							{/* <Text style={[ styles.prompt, { fontFamily: 'slukoni' } ]}>Your prompt:</Text>
							<Text style={[ styles.prompt_2, { fontFamily: 'slukoni' } ]}>Your prompt:</Text> */}
							<Prompt getPrompts={this.getPrompts} />
							<Text style={[ styles.prompt, { fontFamily: 'lemon-milk', color: '#ffffff' } ]} />
						</View>
					</View>
				) : null}
				{/* </View> */}
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
	instructions: {
		width: 377,
		color: color.pastelBlueWhite,
		lineHeight: 24,
		marginTop: 0,
		padding: 16,
		top: 0,
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 38
	},
	buttonContainer: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		top: 440,
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
