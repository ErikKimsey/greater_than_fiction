import React, { Component } from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import abstract from '../assets/abstract.png';

export default class Go extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prompt: '',
			instructions: ''
		};
	}

	componentDidMount() {}

	onPressGo = () => {
		// this.props.navigation.navigate('TextEditor', {
		// 	prompt: this.state.prompt
		// });
		console.log('go');
	};

	render() {
		return (
			<ImageBackground source={abstract}>
				{/* <Text>{this.state.prompt}</Text>
				<Text>{this.state.instructions}</Text> */}
				<Button title="Go!" onPress={this.onPressGo} color={color.softRed} accessibilityLabel="Go, write!" />
			</ImageBackground>
		);
	}
}
