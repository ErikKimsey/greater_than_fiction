import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WERDS } from '../../assets/vocab/vocab';

/**
 * GOAL: Return 3 random words.
 */
export default class Prompt extends Component {
	state = {
		werds: WERDS,
		length: null
	};

	componentDidMount() {
		// this.setState({ werds: WERDS });
		// this.generatePrompt();
		let len = this.werdsLength();
		this.setState({ length: len });
	}

	generatePrompt = () => {
		for (let i = 0; i < 3; i++) {
			// generate random number
			let index = this.randomize(0, this.state.length);
			console.log('index >>>> ', index);

			// use number as index
			// grab words from WERD[index]
			// push word to this.state.werds
		}
	};

	werdsLength = () => {
		if (this.state.werds != null) {
			return this.state.werds.length;
		}
	};

	randomize = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	render() {
		return (
			<View>
				<Text>{this.state.length}</Text>
			</View>
		);
	}
}
