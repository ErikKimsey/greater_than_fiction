import { Gyroscope } from 'expo-sensors';

class GyroScope {
	constructor() {
		gyroData: null;
	}

	async checkGyroAccess() {
		if (await Gyroscope.isAvailableAsync()) {
			this.initGyroListener();
		} else {
			console.log('No gyro access');
		}
	}

	async initGyroListener() {
		await Gyroscope.addListener((result) => {
			this.setGyroData(result);
		});
	}

	setGyroData(res) {
		this.gyroData = res;
	}

	getGyroData() {
		return this.gyroData;
	}

	removeGyroListener() {}
}

export default GyroScope;
