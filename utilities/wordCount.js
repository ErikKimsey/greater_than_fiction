const wordCount = (input) => {
	let count = input.split(' ').length;
	return wordsRemaining(count);
};

const wordsRemaining = (count) => {
	return 100 - count;
};

export { wordCount };
