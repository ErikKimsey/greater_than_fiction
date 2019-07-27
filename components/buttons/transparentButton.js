import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import color from '../../assets/globals/colors';

export default function TransparentButton(props) {
	const { pressBtn, btnLabel, accessLabel } = props;
	const pressButton = () => {
		return pressBtn();
	};

	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					pressButton();
				}}
				activeOpacity={0.8}
				accessibilityLabel={accessLabel}
			>
				<Text style={[ styles.buttonText ]}>{btnLabel}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		margin: 5
	},
	button: {
		alignItems: 'center',
		paddingLeft: 50,
		paddingRight: 50,
		// bottom: 40,
		borderColor: color.pastelBlueWhite,
		borderWidth: 1,
		borderRadius: 5
	},
	buttonText: {
		color: color.pastelBlueWhite,
		fontSize: 18,
		padding: 10
	}
});
