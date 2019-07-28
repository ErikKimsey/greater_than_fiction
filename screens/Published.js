import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, CameraRoll, ImageBackground } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import color from '../assets/globals/colors';
import { captureRef as takeSnapshotAsync } from 'react-native-view-shot';
import * as Permissions from 'expo-permissions';
import PublishedButton from '../components/buttons/publishedButtons';
import TransparentButton from '../components/buttons/transparentButton';
import brainbulb from '../assets/cartographer.png';

export default class Published extends Component {
	state = {
		cameraRollUri: null,
		hasCameraPermission: false,
		saved: false,
		width: null,
		height: null
	};

	async componentDidMount() {
		console.log(Dimensions.get('screen'));

		const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
		this.setState({ hasCameraPermission: status === 'granted' });
		const { height, width } = this.props.navigation.state.params;
		this.setState({ height, width });
	}

	resetAction = StackActions.reset({
		index: 0,
		actions: [ NavigationActions.navigate({ routeName: 'Landing' }) ]
	});

	exitPublished = () => {
		this.props.navigation.dispatch(this.resetAction);
	};

	_saveToCameraRollAsync = async () => {
		let result = await takeSnapshotAsync(this._container, {
			format: 'png',
			result: 'tmpfile',
			height: this.props.navigation.state.params.height * 0.7,
			width: this.props.navigation.state.params.width,
			quality: 1
		});

		let saveResult = await CameraRoll.saveToCameraRoll(result, 'photo');
		this.setState({ cameraRollUri: saveResult, saved: true });
	};

	render() {
		const { text, title, author } = this.props.navigation.state.params;
		if (!this.state.saved) {
			return (
				<ImageBackground
					source={brainbulb}
					style={[
						{ width: '100%', height: '120%', backgroundColor: color.mattPurple },
						styles.publishedContainer
					]}
				>
					<View
						collapsable={false}
						style={styles.saveContainer}
						ref={(view) => {
							this._container = view;
						}}
					>
						<Text style={styles.text}>{text}</Text>
						<Text style={styles.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique sagittis nisl quis
							suscipit. Donec turpis mauris, venenatis vel elit accumsan, vulputate pharetra leo.
							Phasellus sollicitudin sagittis erat, eget iaculis ante laoreet tempus. Praesent at mi sit
							amet odio sollicitudin faucibus. Ut ullamcorper ipsum et tellus dictum, at scelerisque massa
							porta. Vestibulum a lobortis nibh. Aliquam lacinia cursus pharetra. Suspendisse vel lacinia
							tellus. Mauris porta tellus nisi, in aliquam dui consectetur aliquet. Duis pulvinar
							imperdiet nulla nec volutpat. Cras in gravida quam. Donec dapibus leo at suscipit egestas.
							Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam.
						</Text>
						{/* <View style={styles.titleAuthorContainer}>
							<Text style={styles.titleAuthor}>What?</Text>
							<Text style={styles.titleAuthor}>by A. Stinker</Text>
						</View> */}
						<View style={styles.titleAuthorContainer}>
							<Text style={[ styles.titleAuthor, styles.title ]}>{title}</Text>
							<Text style={styles.titleAuthor}>{author}</Text>
						</View>
						<Text style={styles.softbodyfooter}>100W33RDS - a SoftBodySocial platform</Text>
					</View>
					<TransparentButton
						pressBtn={this._saveToCameraRollAsync}
						btnLabel="Save"
						accessLabel="Save"
						btnFont="lemon-milk"
					/>
				</ImageBackground>
			);
		} else if (this.state.saved) {
			return (
				<ImageBackground
					source={brainbulb}
					style={[
						{ width: '100%', height: '120%', backgroundColor: color.mattPurple },
						styles.viewImageContainer
					]}
				>
					{this.state.cameraRollUri && (
						<Image
							source={{ uri: this.state.cameraRollUri }}
							resizeMode="contain"
							style={[
								{
									width: this.props.navigation.state.params.width,
									height: this.props.navigation.state.params.height
								}
							]}
						/>
					)}
					<TransparentButton
						pressBtn={this.exitPublished}
						btnLabel="Exit"
						accessLabel="Exit"
						btnFont="lemon-milk"
					/>
				</ImageBackground>
			);
		}
	}
}

const styles = StyleSheet.create({
	publishedContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 50,
		margin: 0,
		backgroundColor: color.mattPurple
	},
	saveContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 40,
		margin: 0
	},
	text: {
		borderStyle: 'solid',
		borderColor: '#000000',
		fontSize: 18,
		color: '#ffffff',
		paddingBottom: 0,
		margin: 1
	},
	titleAuthorContainer: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		paddingTop: 10
	},
	titleAuthor: {
		color: color.softRed,
		fontSize: 18
	},
	title: {
		fontSize: 22
	},
	viewImageContainer: {
		flex: 1,
		paddingTop: 50,
		margin: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.mattPurple
	},
	image: {
		paddingTop: 0,
		margin: 0,
		borderColor: '#000000'
	},
	softbodyfooter: {
		color: color.pastelBlueWhite,
		fontSize: 12,
		opacity: 0.5,
		marginTop: 0,
		padding: 0
	}
});
