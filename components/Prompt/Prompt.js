import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WERDS } from '../../assets/vocab/vocab';
import generatePrompt from '../../utilities/promptGenerator';

const PromptContext = React.createContext();

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
		return <Text>{this.state.prompt}</Text>;
	}
}
