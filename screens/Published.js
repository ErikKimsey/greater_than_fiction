import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, CameraRoll } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import color from '../assets/globals/colors';
// import { takeSnapshotAsync } from 'expo';
import { captureRef as takeSnapshotAsync } from 'react-native-view-shot';
// import { Camera,  } from 'expo';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import PublishedButton from '../components/buttons/publishedButtons';

export default class Published extends Component {
	state = {
		cameraRollUri: null,
		hasCameraPermission: false,
		saved: false
	};

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		console.log({ hasCameraPermission: status === 'granted' });

		this.setState({ hasCameraPermission: status === 'granted' });
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
			result: 'tmpfile'
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
						style={styles.saveContainer}
						ref={(view) => {
							this._container = view;
						}}
					>
						<Text style={styles.text}>{text}</Text>
						<View style={styles.titleAuthorContainer}>
							<Text style={styles.titleAuthor}>"{title}"</Text>
							<Text style={styles.titleAuthor}>by {author}</Text>
						</View>
					</View>
					{/* {this.state.cameraRollUri && (
						<Image source={{ uri: this.state.cameraRollUri }} style={{ width: 200, height: 200 }} />
					)} */}
					<PublishedButton
						saved={this.state.saved}
						saveToRoll={this._saveToCameraRollAsync}
						exitPublished={this.exitPublished}
					/>
				</View>
			);
		} else if (this.state.saved) {
			return (
				<View>
					{this.state.cameraRollUri && (
						<Image source={{ uri: this.state.cameraRollUri }} style={{ width: 200, height: 200 }} />
					)}
					<PublishedButton
						saved={this.state.saved}
						saveToRoll={this._saveToCameraRollAsync}
						exitPublished={this.exitPublished}
					/>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	publishedContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		padding: 50,
		alignItems: 'stretch',
		backgroundColor: color.gray
	},
	saveContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		padding: 0,
		alignItems: 'stretch',
		backgroundColor: color.gray
	},
	text: {
		borderStyle: 'solid',
		borderColor: '#000000',
		fontSize: 20,
		color: '#ffffff',
		paddingBottom: 20
	},
	titleAuthorContainer: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		paddingTop: 10
	},
	titleAuthor: {
		color: color.softRed,
		fontSize: 18
	}
});
