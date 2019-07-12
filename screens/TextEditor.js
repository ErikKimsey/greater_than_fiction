import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class TextEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { text: 'Useless Placeholder' };
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
			<View>
				<Text>Text Editor</Text>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
					onChangeText={(text) => this.setState({ text })}
					value={this.state.text}
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
