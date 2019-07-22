import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WERDS } from '../../assets/vocab/vocab';
import generatePrompt from '../../utilities/promptGenerator';
import color from '../../assets/globals/colors';

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

	componentDidMount() {
		this.getPrompts();
	}

	getPrompts = () => {
		return this.props.getPrompts(this.state.prompt);
	};

	render() {
		return <Text style={styles.text}>{this.state.prompt}</Text>;
	}
}

const styles = StyleSheet.create({
	text: {
		marginTop: 10,
		// backgroundColor: color.softRed,
		color: color.softRed,
		fontSize: 28,
		fontWeight: '900'
	}
});
