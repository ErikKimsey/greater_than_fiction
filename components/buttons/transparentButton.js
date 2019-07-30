import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import color from '../../assets/globals/colors';

export default function TransparentButton(props) {
	const { pressBtn, btnLabel, accessLabel, btnFont } = props;
	const pressButton = () => {
		return pressBtn();
	};

	return (
		<View style={styles.buttonContainer}>
			<TouchableHighlight
				underlayColor={color.softRed}
				style={styles.button}
				onPress={() => {
					pressButton();
				}}
				activeOpacity={0.8}
				accessibilityLabel={accessLabel}
			>
				<Text style={[ { fontFamily: btnFont }, styles.buttonText ]}>{btnLabel}</Text>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		// flex:1,
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginBottom: 50
	},
	button: {
		alignItems: 'center',
		paddingLeft: 50,
		paddingRight: 50,
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
