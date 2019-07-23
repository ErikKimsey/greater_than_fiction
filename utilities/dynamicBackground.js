import { Gyroscope } from 'expo-sensors';

class DynamicBackground {
	constructor() {}

	async checkGyroAccess() {
		console.log('checking access');
    if(await Gyroscope.isAvailableAsync()){
      this.initGyroListener();
    }
		console.log(await Gyroscope.isAvailableAsync());
	}

	initGyroListener() {
		Gyroscope.addListener(this.getGyroData);
	}

	getGyroData(res) {
		console.log(res);
	}

	removeGyroListener() {}
}

export default DynamicBackground;
