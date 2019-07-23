import React from 'react';
import { StyleSheet } from 'react-native';
import GyroScope from '../utilities/dynamicBackground';

/**
 * 
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
