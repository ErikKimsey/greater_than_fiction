import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function transparentButton() {

  
	const pressButton = () => {
		console.log('pressing button');
  };
  
	return (
		<View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={pressButton}
					activeOpacity={0.8}
					accessibilityLabel="transButton!"
				>
					<Text style={[ styles.buttonText, { fontFamily: 'lemon-milk' } ]}>Get Set.</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		top: 500,
		width: '100%'
	},
	button: {
		alignItems: 'center',
		backgroundColor: 'transparent',
		paddingLeft: 50,
		paddingRight: 50,
		bottom: 40,
		borderWidth: 1,
		borderColor: color.pastelBlueWhite,
		borderRadius: 5
	},
	buttonText: {
		color: color.pastelBlueWhite,
		fontSize: 18,
		padding: 10
	}
});
