import GyroScope from '../utilities/dynamicBackground';

const RGBValues = {
	r: 111,
	g: 11,
	b: 111
};

const XYZValues = {
	x: 0,
	y: 0,
	z: 0
};

let gyro = null;

const colors = {
	color_1: `rgb(${RGBValues.r},${RGBValues.g},${RGBValues.b})`,
	color_2: `rgb(${RGBValues.r},${RGBValues.g},${RGBValues.b})`
};

function initGyro() {
	gyro = new GyroScope();
	gyro.checkGyroAccess();
}

function getGyroData() {
	// console.log(gyro.gyroData);
}

function setAxisVals(axisObj) {}

function colorMapping(data) {
	// console.log('Color data >> ');
	// console.log(data);
}

function mapAxisToRGBLimit(axisVal, rgbVal) {}

/**
 *  * Re-maps a number from one range to another.
 * <br><br>
 * In the first example above, the number 25 is converted from a value in the
 * range of 0 to 100 into a value that ranges from the left edge of the
 * window (0) to the right edge (width).
 *
 * @method map
 * @param  {Number} value  the incoming value to be converted
 * @param  {Number} start1 lower bound of the value's current range
 * @param  {Number} stop1  upper bound of the value's current range
 * @param  {Number} start2 lower bound of the value's target range
 * @param  {Number} stop2  upper bound of the value's target range
 * @param  {Boolean} [withinBounds] constrain the value to the newly mapped range
 * @return {Number}        remapped number
 * @example
 *   <div><code>
 * let value = 25;
 * let m = map(value, 0, 100, 0, width);
 * ellipse(m, 50, 10, 10);
 */

const checkBounds = () => {};

const map = function(incoming, lowerCurent, upperCurrent, lowerTarget, upperTarget, withinBoundsBool) {
	const newval =
		(incoming - lowerCurent) / (upperCurrent - lowerCurent) * (upperTarget - upperCurrent) + upperCurrent;
	if (!withinBounds) {
		return newval;
	}
	if (upperCurrent < upperTarget) {
		return this.constrain(newval, upperCurrent, upperTarget);
	} else {
		return this.constrain(newval, upperTarget, upperCurrent);
	}
};

const constrain = function(incoming, lowLimit, highLimit) {
	return Math.max(Math.min(n, high), low);
};

export { initGyro, getGyroData };
