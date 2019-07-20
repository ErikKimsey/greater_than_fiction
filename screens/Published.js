import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, CameraRoll } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import color from '../assets/globals/colors';
// import { takeSnapshotAsync } from 'expo';
import { captureRef as takeSnapshotAsync } from 'react-native-view-shot';
// import { Camera,  } from 'expo';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

export default class Published extends Component {
	state = {
		cameraRollUri: null,
		hasCameraPermission: false
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
		// props.navigation.dispatch(StackActions.push('Landing'));
		props.navigation.dispatch(resetAction);
		// props.navigation.push('Landing');
	};

	_saveToCameraRollAsync = async () => {
		let result = await takeSnapshotAsync(this._container, {
			format: 'png',
			result: 'tmpfile'
		});

		console.log(result);
		let saveResult = await CameraRoll.saveToCameraRoll(result, 'photo');

		this.setState({ cameraRollUri: saveResult });
	};
	render() {
		const { text, title, author } = this.props.navigation.state.params;
		return (
			<View
				style={styles.publishedContainer}
				ref={(view) => {
					this._container = view;
				}}
			>
				<View style={styles.saveContainer}>
					<Text style={styles.text}>{text}</Text>
					<View style={styles.titleAuthorContainer}>
						<Text style={styles.titleAuthor}>"{title}"</Text>
						<Text style={styles.titleAuthor}>by {author}</Text>
					</View>
				</View>
				<Button
					title="Save"
					onPress={() => {
						this._saveToCameraRollAsync();
					}}
				/>
				<Button
					title="Exit"
					onPress={() => {
						this.exitPublished();
					}}
				/>
				{this.state.cameraRollUri && (
					<Image source={{ uri: this.state.cameraRollUri }} style={{ width: 200, height: 200 }} />
				)}
			</View>
		);
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
		padding: 50,
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
