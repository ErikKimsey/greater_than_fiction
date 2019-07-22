import React from 'react';
import { Button } from 'react-native';
import color from '../../assets/globals/colors';

export default function PublishedButtons(props) {
	const exitPublished = () => {
		return props.exitPublished();
	};

	const saveToRoll = () => {
		return props.saveToRoll();
	};

	if (props.saved === false) {
		return (
			<Button
				color={color.softRed}
				title="Save"
				onPress={() => {
					saveToRoll();
				}}
			/>
		);
	} else if (props.saved === true) {
		return (
			<Button
				color={color.softRed}
				title="Exit"
				onPress={() => {
					exitPublished();
				}}
			/>
		);
	}
}
