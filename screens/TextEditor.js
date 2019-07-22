import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Dimensions } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import color from '../assets/globals/colors';
import { wordCount } from '../utilities/wordCount';
import Clock from '../components/clock';

class TextEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			wordCount: 100,
			isPublished: false,
			clockReset: false,
			previewImg: false,
			imgURI: '',
			author: '',
			title: '',
			width: null,
			height: null
		};
	}

	componentDidMount() {
		this.setState({ isPublished: false });
		const { height, width } = Dimensions.get('window');
		this.setState({ height: height, width: width });
	}

	onPressPublish = () => {
		this.props.navigation.navigate('Published', {
			text: this.state.text,
			title: this.state.title,
			author: this.state.author,
			height: this.state.height,
			width: this.state.width
		});
		this.closeFinal();
		this.setState({ isPublished: false });
	};

	handleInputChange = (text) => {
		this.setState({ text });
		let count = wordCount(this.state.text);
		this.setState({ wordCount: count });
	};

	handleClearInput = () => {
		this.setState({ text: '', author: '', title: '' });
		this.setState({ isPublished: false });
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

	getRemainingTime = (cb) => {
		this.setState({ isPublished: cb });
	};

	resetClock = () => {
		this.setState({ resetClock: true });
		return this.state.isPublished;
	};

	componentWillUnmount() {
		this.resetClock();
		this.handleClearInput();
	}

	render() {
		let { prompt } = this.props.navigation.state.params;
		let clock = this.state.isPublished ? null : (
			<Clock remaining={this.getRemainingTime} reset={this.state.clockReset} />
		);
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View style={styles.textContainer}>
					<Text style={styles.count}>Words remaining: {this.state.wordCount}</Text>
					{clock}
					<Text style={styles.prompt}>Prompt: {prompt}</Text>
				</View>
				<TextInput
					style={styles.paragraph}
					onChangeText={(text) => this.handleInputChange(text)}
					value={this.state.text}
					editable={true}
					multiline={true}
					placeholder="100 words. Go..."
				/>
				<TextInput
					style={styles.titleAuthor}
					onChangeText={(text) => {
						this.setState({ title: text });
					}}
					value={this.state.title}
					editable={true}
					placeholder="Title..."
				/>
				<TextInput
					style={styles.titleAuthor}
					onChangeText={(text) => {
						this.setState({ author: text });
					}}
					value={this.state.author}
					editable={true}
					placeholder="Author name..."
				/>
				<View style={styles.buttonContainer}>
					<Button
						style={[ styles.button ]}
						onPress={this.onPressPublish}
						title="Publish"
						color={color.softRed}
						accessibilityLabel="Publish"
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		paddingTop: 50,
		backgroundColor: color.gray
	},
	paragraph: {
		flex: 4,
		textAlignVertical: 'top',
		flexDirection: 'column',
		alignItems: 'stretch',
		fontSize: 18,
		fontWeight: 'bold',
		paddingTop: 0,
		borderColor: 'gray',
		backgroundColor: '#ffffff',
		borderWidth: 1,
		padding: 10,
		paddingTop: 10,
		margin: 5
	},
	textContainer: {
		flexDirection: 'column',
		paddingLeft: 10
	},
	count: {
		color: color.softRed,
		fontWeight: '900',
		fontSize: 20
	},
	final: {
		fontWeight: '900',
		fontSize: 20
	},
	buttonContainer: {
		flexDirection: 'column',
		padding: 20
	},
	button: {
		paddingTop: 100,
		paddingBottom: 100,
		backgroundColor: color.softRed
	},
	titleAuthor: {
		margin: 5,
		width: 300,
		textAlignVertical: 'top',
		flexDirection: 'column',
		alignSelf: 'flex-end',
		fontSize: 18,
		fontWeight: 'bold',
		borderColor: color.softRed,
		backgroundColor: color.gray,
		borderWidth: 2,
		paddingTop: 5,
		paddingLeft: 10,
		color: color.softRed
	},
	prompt: {
		color: '#ffffff',
		fontWeight: '900'
	}
});

export default withNavigationFocus(TextEditor);
