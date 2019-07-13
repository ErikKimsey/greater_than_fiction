const wordCount = (input) => {
	console.log('receiving input >>>>>> ', input);

	let count = input.split(' ').length;
	console.log('word coount >>>>>> ', count);
	return wordsRemaining(count);
};

const wordsRemaining = (count) => {
	return 100 - count;
};

export { wordCount };
