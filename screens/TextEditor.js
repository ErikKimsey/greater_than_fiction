import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as fs from 'expo-file-system';
import color from '../assets/globals/colors';
import { saveText, getFile } from '../utilities/saveText';
import { wordCount } from '../utilities/wordCount';

export default class TextEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			wordCount: 100,
			isPublished: false
		};
	}

	onPressPreview = () => {
		wordCount(this.state.text);
	};

	onPressPublish = () => {
		saveText('lovely', this.state.text);
		getFile('lovely');
		this.setState({ isPublished: true });
	};

	handleInputChange = (text) => {
		this.setState({ text });
		let count = wordCount(this.state.text);
		this.setState({ wordCount: count });
	};

	handleClearInput = () => {
		this.setState({ text: '' });
	};

	closeFinal = () => {
		this.handleClearInput();
		this.setState({ isPublished: false });
	};

	render() {
		{
			if (!this.state.isPublished) {
				return (
					<View style={styles.container}>
						{/* <Text>{this.state.prompt}</Text> */}
						<Text style={styles.count}>Words remaining: </Text>
						<Text style={styles.count}>{this.state.wordCount}</Text>
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
						<Button
							onPress={this.onPressPublish}
							title="Publish"
							color="#841584"
							accessibilityLabel="Publish"
						/>
					</View>
				);
			} else if (this.state.isPublished) {
				return (
					<View style={styles.container}>
						<Text style={styles.final}>{this.state.text}</Text>
						<Button
							onPress={this.closeFinal}
							title="Publish"
							color="#000000"
							accessibilityLabel="Publish"
						/>
					</View>
				);
			}
		}
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
	},
	count: {
		fontWeight: '900',
		fontSize: 20
	},
	final: {
		fontWeight: '900',
		fontSize: 20
	}
});
