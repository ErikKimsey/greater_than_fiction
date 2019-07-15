import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../assets/globals/colors';

export default function Published(props) {
	console.log(props);

	return (
		<View style={styles.publishedContainer}>
			<View>
				<Text style={styles.text}>{props.title}</Text>
				<Text style={styles.text}>{props.author}</Text>
			</View>
			<Text style={styles.text}>{props.preview}</Text>
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
		color: '#ffffff'
	}
});
