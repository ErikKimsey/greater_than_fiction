import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, CameraRoll, PixelRatio } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import color from '../assets/globals/colors';
import { captureRef as takeSnapshotAsync } from 'react-native-view-shot';
import * as Permissions from 'expo-permissions';
import PublishedButton from '../components/buttons/publishedButtons';
import TransparentButton from '../components/buttons/transparentButton';

export default class Published extends Component {
	state = {
		cameraRollUri: null,
		hasCameraPermission: false,
		saved: false,
		width: null,
		height: null
	};

	async componentDidMount() {
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
				<View style={styles.publishedContainer}>
					<View
						collapsable={false}
						style={styles.saveContainer}
						ref={(view) => {
							this._container = view;
						}}
					>
						{/* <Text style={styles.text}>{text}</Text>
						<View style={styles.titleAuthorContainer}>
							<Text style={styles.titleAuthor}>"{title}"</Text>
							<Text style={styles.titleAuthor}>by {author}</Text>
						</View> */}
						<Text style={styles.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Text>
						<View style={styles.titleAuthorContainer}>
							<Text style={styles.titleAuthor}>What?</Text>
							<Text style={styles.titleAuthor}>by A. Stinker</Text>
						</View>
					</View>
					<TransparentButton
						pressBtn={this._saveToCameraRollAsync}
						btnLabel="Save"
						accessLabel="Save"
						btnFont="lemon-milk"
					/>
					{/* <PublishedButton saved={this.state.saved} saveToRoll={this._saveToCameraRollAsync} /> */}
				</View>
			);
		} else if (this.state.saved) {
			return (
				<View style={styles.viewImageContainer}>
					{this.state.cameraRollUri && (
						<Image
							source={{ uri: this.state.cameraRollUri }}
							style={[
								{
									width: this.props.navigation.state.params.width * 0.9,
									height: this.props.navigation.state.params.height * 0.7
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
					{/* <PublishedButton saved={this.state.saved} exitPublished={this.exitPublished} /> */}
				</View>
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
		// top: 80
	},
	text: {
		borderStyle: 'solid',
		borderColor: '#000000',
		fontSize: 20,
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
	viewImageContainer: {
		flex: 1,
		paddingTop: 50,
		margin: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.mattPurple
	},
	image: {
		padding: 20,
		margin: 0,
		borderColor: '#000000'
	}
});
