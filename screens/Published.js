import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../assets/globals/colors';

export default function Published() {
	return (
		<View style={styles.publishedContainer}>
			<Text>PUBLISJED</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	publishedContainer: {
		backgroundColor: color.gray
	}
});
