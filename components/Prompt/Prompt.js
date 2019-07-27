import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { WERDS } from '../../assets/vocab/vocab';
import * as Font from 'expo-font';
import generatePrompt from '../../utilities/promptGenerator';
import color from '../../assets/globals/colors';

/**
 * GOAL: Return 3 random words in a component.
 */
export default class Prompt extends Component {
	state = {
		werds: WERDS,
		prompt: '',
		fontLoaded: false
	};

	async componentWillMount() {
		await Font.loadAsync({
			'lemon-milk': require('../../assets/fonts/LemonMilk.otf'),
			dayrom: require('../../assets/fonts/DAYROM.ttf'),
			painterz: require('../../assets/fonts/Painterz.ttf'),
			cubesity: require('../../assets/fonts/cubesity.ttf'),
			fatC: require('../../assets/fonts/FatC.ttf'),
			fatCat: require('../../assets/fonts/FatCat.ttf'),
			slukoni: require('../../assets/fonts/Slukoni.otf')
		});

		this.setState({ fontLoaded: true });
		this.setState({ prompt: generatePrompt(this.state.werds) });
	}

	getPrompts = () => {
		return this.props.getPrompts(this.state.prompt);
	};

	render() {
		return (
			<View style={styles.promptContainer}>
				{this.state.fontLoaded ? (
					<View style={styles.textContainer}>
						<Text style={[ styles.text_2, { fontFamily: 'cubesity' } ]}>{this.state.prompt}</Text>
						<Text style={[ styles.text, { fontFamily: 'lemon-milk' } ]}>{this.state.prompt}</Text>
					</View>
				) : null}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	promptContainer: {
		// flexDirection: 'column',
		// // justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10
		// padding: 10
		// margin: 12
	},
	textContainer: {
		width: 380,
		alignItems: 'center',
		height: 80
	},
	text: {
		color: color.pastelBlueWhite,
		fontSize: 24,
		textAlign: 'center',
		marginTop: 6
	},
	text_2: {
		position: 'absolute',
		fontSize: 36,
		color: '#3E3145',
		opacity: 0.2,
		left: 12,
		marginBottom: 17,
		zIndex: -1,
		textAlign: 'center',
		textShadowColor: color.Gray,
		textShadowOffset: { width: -7, height: 4 },
		textShadowRadius: 10
	}
});
