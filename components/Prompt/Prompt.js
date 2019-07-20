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
		const promptArr = generatePrompt(this.state.werds);
		this.setState({ prompt: promptArr });
	}

	render() {
		return (
			<View>
				<Text>{this.state.prompt}</Text>
			</View>
		);
	}
}
