import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WERDS } from '../../assets/vocab/vocab';
import { NavigationEvents } from 'react-navigation';
import generatePrompt from '../../utilities/promptGenerator';

/**
 * GOAL: Return 3 random words in a component.
 */
export default class Prompt extends Component {
	state = {
		werds: WERDS,
		prompt: []
	};

	componentWillMount() {
		this.setState({ prompt: generatePrompt(this.state.werds) });
	}

	render() {
		return (
			<View>
				<NavigationEvents onDidBlur={() => this.setState({ prompt: this.state.prompt.splice() })} />
				<Text>{this.state.prompt}</Text>
			</View>
		);
	}
}
