const wordCount = (input) => {
	console.log('receiving input >>>>>> ', input);

	breakString(input);
};

const breakString = (str) => {
	let count = str.split(' ').length;
	console.log('word coount >>>>>> ', count);
};

export { wordCount, breakString };
