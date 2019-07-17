import * as FileSystem from 'expo-file-system';

const wordsFileURI = './vocab.txt';
const words = [];

function makeArray() {
	FileSystem.readAsStringAsync(wordsFileURI)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
}
