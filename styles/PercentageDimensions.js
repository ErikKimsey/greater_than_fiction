import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default class PercentageDimensions {
	constructor(heightPerc, widthPerc) {
		// super();
		this.calcWidth = null;
		this.calcHeight = null;
		this.heightPerc = heightPerc;
		this.widthPerc = widthPerc;
	}

	getDimensions() {
		const { width, height } = Dimensions.get('window');
		console.log(`height: ${height}, width: ${width}`);
		return { width, height };
	}

	calcPaddedDimensions() {
		const { width, height } = this.getDimensions();
		console.log(`height: ${height}, width: ${width}`);

		this.calcHeight = height * this.heightPerc;
		console.log(this.calcHeight);

		// return StyleSheet.create({});
	}
}
