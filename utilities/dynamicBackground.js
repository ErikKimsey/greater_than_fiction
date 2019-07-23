import { Gyroscope } from 'expo-sensors';

class GyroScope {
	constructor() {}

	async checkGyroAccess() {
		if (await Gyroscope.isAvailableAsync()) {
			this.initGyroListener();
		} else {
			console.log('No gyro access');
		}
	}

	async initGyroListener() {
		await Gyroscope.addListener((result) => {
			this.getGyroData(result);
		});
	}

	getGyroData(res) {
		console.log('result in getGyroData');
		console.log(res);
	}

	removeGyroListener() {}
}

export default GyroScope;
