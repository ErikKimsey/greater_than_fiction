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
			<ImageBackground source={abstract} style={[ styles.container, { width: '100%', height: '100%' } ]}>
				{this.state.fontLoaded ? (
					<View style={styles.subContainer}>
						<Text style={[ { fontFamily: 'lemon-milk', color: color.softRed }, styles.instructions ]}>
							{this.state.instructions}
						</Text>
						<Text style={styles.prompt}>Your prompt:</Text>
						<Prompt getPrompts={this.getPrompts} />
						<Text style={[ styles.prompt, { fontFamily: 'lemon-milk', color: '#ffffff' } ]} />
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
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	subContainer: {
		flex: 1,
		padding: 30,
		margin: 20,
		top: 10,
		backgroundColor: 'rgba(255,255,255,0.2)',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	prompt: {
		color: '#ffffff',
		fontSize: 18
	},
	instructions: {
		color: '#ffffff',
		marginBottom: 0,
		marginTop: 90,
		fontSize: 22
	},
	button: {
		color: color.softRed,
		marginBottom: 80
	}
});
