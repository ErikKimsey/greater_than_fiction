import React from 'react';
import { View, Button } from 'react-native';

export default function PublishedButtons() {
	const exitPublished = () => {
		return props.exit();
	};

	const saveImage = () => {
		return props.save();
	};

	if (!props.saved) {
		return (
			<Button
				title="Save"
				onPress={() => {
					this._saveToCameraRollAsync();
				}}
			/>
		);
	} else if (props.saved) {
		return (
			<Button
				title="Exit"
				onPress={() => {
					this.exitPublished();
				}}
			/>
		);
	}
}
