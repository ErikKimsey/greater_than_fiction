import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	KeyboardAvoidingView,
	Dimensions,
	ImageBackground,
	Alert,
	Platform
} from 'react-native';
import * as Font from 'expo-font';
import { withNavigationFocus } from 'react-navigation';
import color from '../assets/globals/colors';
import { wordCount } from '../utilities/wordCount';
import Clock from '../components/clock';
import Prompt from '../components/Prompt/Prompt';
import brainbulb from '../assets/cartographer.png';
import TransparentButton from '../components/buttons/transparentButton';

import isEmpty from '../utilities/checkEmptyFields';
import promptCheck from '../utilities/promptCheck';

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
			fontLoaded: false,
			promptCheckArr: [ false, false, false ],
			promptUsed: false
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
		console.log('prompt >>> ');
		console.log(typeof this.state.prompt);
	}

	onPressPublish = () => {
		const { text, title, author } = this.state;
		let empty = isEmpty([ text, title, author ]);
		if (empty === false) {
			this.props.navigation.navigate('Published', {
				text: this.state.text,
				title: this.state.title,
				author: this.state.author,
				height: this.state.height,
				width: this.state.width
			});
			this.closeFinal();
			this.setState({ isPublished: false });
		} else {
			Alert.alert(
				'Hold on...',
				'You are not done yet. Check all input fields.',
				[ { text: 'Ok', onPress: () => console.log('Ask me later pressed') } ],
				{ cancelable: false }
			);
		}
	};

	navToPublished = () => {
		const { text, title, author } = this.state;
		this.setState({ isPublished: false });
		let empty = isEmpty([ text, title, author ]);
		if (empty === false) {
			this.props.navigation.navigate('Published', {
				text: this.state.text,
				title: this.state.title,
				author: this.state.author,
				height: this.state.height,
				width: this.state.width
			});
			this.closeFinal();
		} else {
			Alert.alert(
				'Hold on...',
				'You are not done yet. Check all input fields.',
				[ { text: 'Ok', onPress: () => console.log('Ask me later pressed') } ],
				{ cancelable: false }
			);
		}
	};

	onTimedOut = () => {
		const { text, title, author } = this.state;
		let empty = isEmpty([ text, title, author ]);
		if (empty === false) {
			this.props.navigation.navigate('Published', {
				text: this.state.text,
				title: this.state.title,
				author: this.state.author,
				height: this.state.height,
				width: this.state.width
			});
			this.closeFinal();
		}
	};

	/**
   * Regarding promptCheck:
   * --- 
   */
	handleInputChange = (text) => {
		this.setState({ text });
		let { remaining, last } = wordCount(this.state.text);
		let checkResults = promptCheck(this.state.prompt, last);
		// console.log('checkResults');
		// console.log(checkResults);

		if (checkResults.bool === true) this.setPromptCheckArr(checkResults);
		this.setState({ wordCount: remaining });
	};

	setPromptCheckArr = (data) => {
		let { index, bool } = data;

		let arrCopy = [ ...this.state.promptCheckArr ];
		arrCopy[index] = bool;

		this.setState({ promptCheckArr: arrCopy });
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

	checkIfAllPromptsUsed = () => {
		this.state.promptCheckArr.forEach((e) => {
			if (e === false) {
				return false;
			} else {
				return true;
			}
		});
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

	handleTimedOut = (to) => {
		this.setState({ isTimedOut: to });
		this.onTimedOut();
	};

	componentWillUnmount() {
		this.resetClock();
		this.handleClearInput();
	}

	render() {
		let clock = this.state.isPublished ? null : (
			<Clock isPublished={this.state.isPublished} getIsTimedOut={this.handleTimedOut} />
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
							placeholderStyle={{ borderColor: color.pastelBlueWhite, color: color.pastelBlueWhite }}
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
		borderWidth: 0,
		borderRadius: 2,
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
		borderColor: color.gray,
		borderRadius: 2,
		backgroundColor: color.inputGray,
		borderWidth: 0,
		paddingTop: 5,
		paddingLeft: 10,
		color: color.pastelBlueWhite
	},
	prompt: {
		color: color.softRed
	}
});

export default withNavigationFocus(TextEditor);
