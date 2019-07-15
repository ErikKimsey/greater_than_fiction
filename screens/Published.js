import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../assets/globals/colors';

export default function Published() {
	return (
		<View style={styles.publishedContainer}>
			<Text>PUBLISJED</Text>
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
		backgroundColor: color.gray
	}
});
