import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import brainbulb from '../assets/fibo.png';
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
				style={[ { width: '100%', height: '100%', backgroundColor: color.Gray } ]}
			>
				<View style={styles.container}>
					{this.state.fontLoaded ? (
						<View>
							<Text style={[ { fontFamily: 'lemon-milk', color: color.softRed }, styles.instructions ]}>
								{this.state.instructions}
							</Text>
							<Text style={[ styles.prompt, { fontFamily: 'slukoni' } ]}>Your prompt:</Text>
							<Prompt getPrompts={this.getPrompts} />
							<Text style={[ styles.prompt, { fontFamily: 'lemon-milk', color: '#ffffff' } ]} />
							<TouchableOpacity
								style={styles.button}
								onPress={this.onPressGo}
								activeOpacity={0.8}
								accessibilityLabel="Go, write!"
							>
								<Text style={[ styles.buttonText, { fontFamily: 'lemon-milk' } ]}>Go!</Text>
							</TouchableOpacity>
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
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20
	},
	// subContainer: {
	// 	// flex: 1,
	// 	padding: 16,
	// 	margin: 2,
	// 	top: 3,
	// 	justifyContent: 'space-between',
	// 	alignItems: 'stretch'
	// },
	prompt: {
		color: color.Yellow,
		fontSize: 52,
		textAlign: 'center',
		alignItems: 'center'
		// marginTop: 30
	},
	instructions: {
		width: 377,
		color: '#ffffff',
		color: color.Gold,
		lineHeight: 24,
		marginBottom: 0,
		marginTop: 0,
		padding: 16,
		top: 10,
		fontSize: 20,
		textAlign: 'left'
	},
	button: {
		// position: 'absolute',
		alignItems: 'center',
		backgroundColor: color.softRed,
		// marginBottom: 10,
		bottom: 0,
		paddingLeft: 50,
		paddingRight: 50
	},
	buttonText: {
		color: color.Gold,
		fontSize: 18,
		padding: 10
	}
});
