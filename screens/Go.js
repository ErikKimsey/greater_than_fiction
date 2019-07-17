import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import abstract from '../assets/abstract.png';
import color from '../assets/globals/colors';
import axios from 'axios';

export default class Go extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prompt: 'YOYOYOYO',
			instructions: 'INSTRUCTIONS'
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
				<Text>Prompt:</Text>
				<Text style={styles.prompt}>{this.state.prompt}</Text>
				<Text style={styles.instructions}>{this.state.instructions}</Text>
				<Button
					title="Go!"
					color={color.softRed}
					onPress={this.onPressGo}
					style={[ styles.button ]}
					accessibilityLabel="Go, write!"
				/>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.gray,
		flex: 1,
		padding: 10
	},
	prompt: {
		color: '#ffffff',
		height: '30%',
		// backgroundColor: color.softRed,
		marginBottom: 10
	},
	instructions: {
		color: '#ffffff',
		height: '30%',
		// backgroundColor: color.softRed,
		marginBottom: 10,
		marginTop: 10
	},
	button: {
		color: color.softRed,
		padding: 10
	}
});
