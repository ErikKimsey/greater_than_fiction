/**
 * Provides word-count functionality.
 */

const MAX_WORDS = 100;

function wordCount(input) {
	let count = input.split(' ').length;
	return wordsRemaining(count);
}

function wordsRemaining(count) {
	return MAX_WORDS - count;
}

export { wordCount };
