import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../assets/globals/colors';

export default function Published(props) {
	return (
		<View style={styles.publishedContainer}>
			<Text style={styles.text}>{props.preview}</Text>
			{/* <View
				ref="viewShot"
				style={styles.container}
				captureMode="mount"
				onCapture={this.takeSnapShot}
				options={{ format: 'png', quality: 0.8 }}
			>
				<Text style={styles.final}>{this.state.text}</Text>
				<Image source={{ uri: this.state.imgURI }} />
				<Button onPress={this.closeFinal} title="Publish" color="#000000" accessibilityLabel="Publish" />
			</View> */}
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
		// height: 50,
		fontSize: 20,
		// backgroundColor: '#000000',
		color: '#ffffff'
	}
});
