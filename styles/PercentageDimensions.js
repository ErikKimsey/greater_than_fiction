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
		return { width, height };
	}

	calcPaddedDimensions() {
		const { width, height } = this.getDimensions();
		this.calcHeight = height * this.heightPerc;
		// return StyleSheet.create({});
	}
}
