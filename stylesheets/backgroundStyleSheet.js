import React from 'react';
import { StyleSheet } from 'react-native';

/**
 * BackgroundStyles
 * Functionality used is creating dynamic, gyroscope-generated background animation
 * props = {
 *  -- converted XYX to RGB,
 * -- etc.
 */

export const BackgroundStyles = (props) =>
	StyleSheet.create({
		backgroundContainer: {
			width: props
		}
	});
