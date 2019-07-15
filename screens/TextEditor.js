import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, CameraRoll } from 'react-native';
import { takeSnapshotAsync } from 'expo';
import { Camera, Permissions } from 'expo';
import color from '../assets/globals/colors';
import { wordCount } from '../utilities/wordCount';
import { captureScreen } from 'react-native-view-shot';
import Clock from '../components/clock';
import Published from './Published';

export default class TextEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			wordCount: 100,
			isPublished: false,
			imgURI: '',
			previewImg: false
		};
	}

	componentDidMount() {}

	onPressPreview = () => {
		wordCount(this.state.text);
	};

	onPressPublish = () => {
		this.setState({ isPublished: true });
		this.saveToCameraRoll();
	};

	handleInputChange = (text) => {
		this.setState({ text });
		let count = wordCount(this.state.text);
		this.setState({ wordCount: count });
	};

	handleClearInput = () => {
		this.setState({ text: '' });
	};

	handleResetWordCount = () => {
		this.setState({ wordCount: 100 });
	};

	closeFinal = () => {
		this.handleClearInput();
		this.handleResetWordCount();
		this.setIsPublished();
	};

	setIsPublished = () => {
		this.setState({ isPublished: !this.state.isPublished });
	};

	getRemainingTime = () => {};

	saveToCameraRoll = () => {
		captureScreen({
			format: 'jpg',
			quality: 0.8
		}).then((uri) => console.log('Image saved to', uri), (error) => console.error('Oops, snapshot failed', error));
	};

	componentDidUpdate() {}

	componentWillUnmount() {}

	render() {
		{
			if (!this.state.isPublished && this.state.previewImg === false) {
				return (
					<View style={styles.container}>
						<View style={styles.textContainer}>
							<Text style={styles.count}>Words remaining: {this.state.wordCount}</Text>
							<Clock remaining={this.getRemainingTime} />
						</View>
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
						<View style={styles.buttonContainer}>
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
					</View>
				);
			} else if (this.state.isPublished) {
				return <Published preview={this.state.text} />;
			}
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginTop: 50,
		backgroundColor: color.gray
	},
	paragraph: {
		textAlignVertical: 'top',
		fontSize: 18,
		fontWeight: 'bold',
		height: 300,
		paddingTop: 0,
		borderColor: 'gray',
		backgroundColor: '#ffffff',
		borderWidth: 1,
		padding: 10,
		paddingTop: 10
	},
	textContainer: {
		// flex: 1,
		flexDirection: 'column'
	},
	count: {
		color: color.softRed,
		fontWeight: '900',
		fontSize: 20,
		paddingLeft: 10
	},
	final: {
		fontWeight: '900',
		fontSize: 20
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		height: 20
	}
	// button
});
