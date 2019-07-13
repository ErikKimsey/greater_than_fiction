import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as fs from 'expo-file-system';
import color from '../assets/globals/colors';
import { saveText, getFile } from '../utilities/saveText';
import { wordCount, breakString } from '../utilities/wordCount';

export default class TextEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			wordCount: 0
		};
	}

	onPressPreview = () => {
		wordCount(this.state.text);
	};

	onPressPublish = () => {
		saveText('lovely', this.state.text);
		getFile('lovely');
	};

	handleInputChange = (text) => {
		this.setState({ text });
		wordCount(this.state.text);
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.paragraph}
					onChangeText={(text) => {
						this.handleInputChange(text);
					}}
					value={this.state.text}
					editable={true}
					multiline={true}
					placeholder="100 words. Go..."
				/>
				<Button
					onPress={this.onPressPreview}
					title="Preview"
					color={color.softRed}
					accessibilityLabel="Learn more about this purple button"
				/>
				<Button onPress={this.onPressPublish} title="Publish" color="#841584" accessibilityLabel="Publish" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50
	},
	paragraph: {
		textAlignVertical: 'top',
		fontSize: 18,
		fontWeight: 'bold',
		height: 300,
		paddingTop: 0,
		borderColor: 'gray',
		borderWidth: 1,
		padding: 10,
		paddingTop: 10
	}
});
