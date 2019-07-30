/**
 * Provides word-count functionality.
 */

function wordCount(input) {
	let count = input.split(' ').length;
	return wordsRemaining(count);
}

function wordsRemaining(count) {
	return 100 - count;
}

export { wordCount };
