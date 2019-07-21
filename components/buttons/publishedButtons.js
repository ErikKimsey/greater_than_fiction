import React from 'react';
import { Button } from 'react-native';

export default function PublishedButtons(props) {
	const exitPublished = () => {
		return props.exitPublished();
	};

	const saveToRoll = () => {
		return props.saveToRoll();
	};

	if (!props.saved) {
		return (
			<Button
				title="Save"
				onPress={() => {
					saveToRoll();
				}}
			/>
		);
	} else if (props.saved) {
		return (
			<Button
				title="Exit"
				onPress={() => {
					exitPublished();
				}}
			/>
		);
	}
}
