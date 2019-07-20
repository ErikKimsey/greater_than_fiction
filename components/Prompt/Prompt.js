import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WERDS } from '../../assets/vocab/vocab';
import generatePrompt from '../../utilities/promptGenerator';

/**
 * GOAL: Return 3 random words in a component.
 */
export default class Prompt extends Component {
	state = {
		werds: WERDS,
		prompt: null
	};

	componentWillMount() {
		this.setState({ prompt: generatePrompt(this.state.werds) });
	}

	render() {
		return (
			<View>
				<Text>{this.state.prompt}</Text>
			</View>
		);
	}
}