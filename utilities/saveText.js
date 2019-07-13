import * as FileSystem from 'expo-file-system';

const URI = 'File"//';

const saveText = async (name, content) => {
	const fileURI = FileSystem.documentDirectory + `${name}.txt`;

	FileSystem.writeAsStringAsync(fileURI, content)
		.then((res) => {
			console.log('>>>>>> WRINTING <<<<<<');
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
	console.log(FileSystem.readAsStringAsync(name));
}

export default saveText;
