import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Dimensions, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { withNavigationFocus } from 'react-navigation';
import color from '../assets/globals/colors';
import { wordCount } from '../utilities/wordCount';
import Clock from '../components/clock';
import Prompt from '../components/Prompt/Prompt';
import brainbulb from '../assets/cartographer.png';
import TransparentButton from '../components/buttons/transparentButton';

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
			height: null,
			prompt: this.props.navigation.state.params.prompt,
			fontLoaded: false
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
			'lemon-milk': require('../assets/fonts/LemonMilk.otf'),
			dayrom: require('../assets/fonts/DAYROM.ttf'),
			painterz: require('../assets/fonts/Painterz.ttf'),
			cubesity: require('../assets/fonts/cubesity.ttf'),
			fatC: require('../assets/fonts/FatC.ttf'),
			fatCat: require('../assets/fonts/FatCat.ttf'),
			slukoni: require('../assets/fonts/Slukoni.otf')
		});
		this.setState({ fontLoaded: true });
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
		let clock = this.state.isPublished ? null : (
			<Clock remaining={this.getRemainingTime} reset={this.state.clockReset} />
		);
		return (
			<ImageBackground
				source={brainbulb}
				style={[ { width: '100%', height: '100%', backgroundColor: color.mattPurple } ]}
			>
				{this.state.fontLoaded ? (
					<KeyboardAvoidingView style={styles.container} behavior="padding">
						<View style={styles.textContainer}>
							<Text style={[ { fontFamily: 'lemon-milk' }, styles.count ]}>
								Words remaining: {this.state.wordCount}
							</Text>
							{clock}
							<Text style={[ { fontFamily: 'lemon-milk' }, styles.prompt ]}>{this.state.prompt}</Text>
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
						<TransparentButton
							pressBtn={this.onPressPublish}
							btnLabel="Publish"
							accessLabel="Publish"
							btnFont="lemon-milk"
						/>
					</KeyboardAvoidingView>
				) : null}
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		paddingTop: 50
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
		backgroundColor: color.inputGray,
		color: '#ffffff',
		// color: color.pastelBlueWhite,
		borderWidth: 1,
		borderRadius: 3,
		padding: 10,
		paddingTop: 10,
		margin: 5
	},
	textContainer: {
		flexDirection: 'column',
		paddingLeft: 10,
		alignItems: 'center'
	},
	count: {
		color: color.pastelBlueWhite,
		fontSize: 20
	},
	final: {
		fontWeight: '900',
		fontSize: 20
	},
	titleAuthor: {
		margin: 5,
		width: 300,
		textAlignVertical: 'top',
		flexDirection: 'column',
		alignSelf: 'flex-end',
		fontSize: 18,
		fontWeight: 'bold',
		borderColor: color.pastelBlueWhite,
		borderRadius: 3,
		backgroundColor: color.inputGray,
		borderWidth: 2,
		paddingTop: 5,
		paddingLeft: 10,
		color: color.pastelBlueWhite
		// color: color.softRed
	},
	prompt: {
		color: color.softRed
	}
});

export default withNavigationFocus(TextEditor);
