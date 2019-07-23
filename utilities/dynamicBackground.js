import { Gyroscope } from 'expo-sensors';

class DynamicBackground {
	constructor() {}

	async checkGyroAccess() {
		console.log('checking access');
		if (await Gyroscope.isAvailableAsync()) {
			this.initGyroListener();
		} else {
			console.log('No gyro access');
		}
	}

	async initGyroListener() {
		console.log('adding listener');
		await Gyroscope.addListener((result) => {
			console.log('result');
			console.log(result);
		});
	}

	getGyroData(res) {
		console.log(res);
	}

	removeGyroListener() {}
}

export default DynamicBackground;
