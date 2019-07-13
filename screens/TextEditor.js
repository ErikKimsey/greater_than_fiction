import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as fs from 'expo-file-system';
import color from '../assets/globals/colors';
import saveText from '../utilities/saveText';

export default class TextEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { text: 'GLOOP' };
	}

	onPressPreview = () => {
		console.log('previewing');
	};
	onPressPublish = () => {
		console.log('publishing');
		saveText('lovely', this.state.text);
	};
	render() {
		console.log(FileSystem.documentDirectory);

		return (
			<View style={styles.container}>
				<TextInput
					style={styles.paragraph}
					onChangeText={(text) => this.setState({ text })}
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
