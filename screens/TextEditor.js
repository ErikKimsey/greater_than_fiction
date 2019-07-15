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
			previewImg: false,
			author: '',
			title: ''
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

	handleAuthor = (text) => {
		this.setState({ author: text });
	};
	handleTitle = (text) => {
		this.setState({ title: text });
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
						<TextInput
							style={styles.titleAuthor}
							onChangeText={(text) => {
								this.handleAuthor(text);
							}}
							value={this.state.title}
							editable={true}
							multiline={true}
							placeholder="Title..."
						/>
						<TextInput
							style={styles.titleAuthor}
							onChangeText={(text) => {
								this.handleTitle(text);
							}}
							value={this.state.author}
							editable={true}
							multiline={true}
							placeholder="Author name..."
						/>
						<View style={styles.buttonContainer}>
							<Button
								onPress={this.onPressPreview}
								title="Preview"
								color={color.softRed}
								style={styles.button}
								accessibilityLabel="Learn more about this purple button"
							/>
							<Button
								style={styles.button}
								onPress={this.onPressPublish}
								title="Publish"
								color="#841584"
								accessibilityLabel="Publish"
							/>
						</View>
					</View>
				);
			} else if (this.state.isPublished) {
				return <Published preview={this.state.text} title={this.state.title} author={this.state.author} />;
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
		flex: 1,
		textAlignVertical: 'top',
		flexDirection: 'column',
		alignItems: 'stretch',
		fontSize: 18,
		fontWeight: 'bold',
		// height: 300,
		paddingTop: 0,
		borderColor: 'gray',
		backgroundColor: '#ffffff',
		borderWidth: 1,
		padding: 10,
		paddingTop: 10,
		margin: 5
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
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 20
	},
	button: {
		flex: 2,
		padding: 100
	},
	titleAuthor: {
		// flex: 1,
		margin: 5,
		width: 300,
		textAlignVertical: 'top',
		flexDirection: 'column',
		alignItems: 'stretch',
		fontSize: 18,
		fontWeight: 'bold',
		// height: 100,
		paddingTop: 0,
		borderColor: color.softRed,
		backgroundColor: color.gray,
		borderWidth: 1,
		padding: 10,
		paddingTop: 10
	}
	// button
});
