import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import abstract from '../assets/abstract.png';
import color from '../assets/globals/colors';

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
		console.log(this.props);
		console.log('go');
	};

	render() {
		return (
			<ImageBackground source={abstract} style={[ styles.container, { width: '100%', height: '100%' } ]}>
				{/* <Text>{this.state.prompt}</Text>
				<Text>{this.state.instructions}</Text> */}
				<Button title="Go!" onPress={this.onPressGo} style={styles.button} accessibilityLabel="Go, write!" />
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.gray,
		flex: 1
	},
	button: {
		color: color.softRed,
    padding: 10,
    
	}
});
