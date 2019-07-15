import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../assets/globals/colors';

export default function Published(props) {
	console.log(props);

	return (
		<View style={styles.publishedContainer}>
			<Text style={styles.text}>{props.preview}</Text>
			<View style={styles.titleAuthorContainer}>
				<Text style={styles.titleAuthorContainer}>"Slammed" {props.title}</Text>
				<Text style={styles.titleAuthorContainer}>by Erik Kimsey{props.author}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	publishedContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		padding: 50,
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
		paddingTop: 10
	},
	titleAuthor: {
		paddingTop: 10
	}
});
