import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import color from '../assets/globals/colors';
import { takeSnapshotAsync } from 'expo';
import { Camera, Permissions } from 'expo';
import * as MediaLibrary from 'expo-media-library';

export default function Published(props) {
	const { text, title, author } = props.navigation.state.params;
	// const targetPixelCount = 1080; // If you want full HD pictures
	// const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
	// pixels * pixelratio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
	// const pixels = targetPixelCount / pixelRatio;

	console.log(this);

	const resetAction = StackActions.reset({
		index: 0,
		actions: [ NavigationActions.navigate({ routeName: 'Landing' }) ]
	});

	const exitPublished = () => {
		// props.navigation.dispatch(StackActions.push('Landing'));
		props.navigation.dispatch(resetAction);
		// props.navigation.push('Landing');
	};

	return (
		<View style={styles.publishedContainer}>
			<Text style={styles.text}>{text}</Text>
			<View style={styles.titleAuthorContainer}>
				<Text style={styles.titleAuthor}>"{title}"</Text>
				<Text style={styles.titleAuthor}>by {author}</Text>
			</View>
			<Button
				title="Exit"
				onPress={() => {
					exitPublished();
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	publishedContainer: {
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
