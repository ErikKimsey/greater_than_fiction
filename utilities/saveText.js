import * as FileSystem from 'expo-file-system';

const URI = 'File"//';

const saveText = async (name, content) => {
	const fileURI = FileSystem.documentDirectory + `${name}.txt`;

	FileSystem.writeAsStringAsync(fileURI, content)
		.then((res) => {
			console.log('>>>>>> WRITING <<<<<<');
			console.log(res);
		})
		.catch((err) => {
			console.error(err);
		});

	FileSystem.readDirectoryAsync(FileSystem.documentDirectory).then((res) => {
		console.log('>>>>>> READING <<<<<<<<');
		console.log(res);
	});
};

function getFile(name) {
	const fileURI = FileSystem.documentDirectory + `${name}.txt`;

	FileSystem.readAsStringAsync(fileURI).then((res) => {
		console.log('>>>>> FOUND? <<<<<<<');

		console.log(res);
	});
}

export { saveText, getFile };
