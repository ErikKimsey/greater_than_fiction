import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as fs from 'expo-file-system';

export default class TextEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
	}

	onPressPreview = () => {
		console.log('previewing');
		this.setState({ text: 'PReviewing' });
	};
	onPressPublish = () => {
		console.log('publishing');
		this.setState({ text: 'Publishing' });
	};
	render() {
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
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
				<Button
					onPress={this.onPressPublish}
					title="Publish"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50
		// flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center'
	},
	paragraph: {
		// width: 300,
		// margin: 1,
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
