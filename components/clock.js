/**
 * Clock functionality
 * Count down from 5minutes
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Clock extends Component {
	state = {
		remainingTime: 5000,
		clockDisplay: '',
		now: Nw
	};

	componentDidMount() {}

	startClock = () => {
		let minutes = parseInt(timer / 60, 10);
	};

	setClock = () => {
    var now = new Date().getTime();
    
		console.log(now);
	};

	outOfTime = () => {};

	componentWillUnmount() {
		this.setState({ remainingTime: 5 });
	}

	render() {
		return (
			<View>
				<Text>{this.state.remainingTime}</Text>
			</View>
		);
	}
}
