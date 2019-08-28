/**
 * Provides word-count functionality.
 */

const MAX_WORDS = 100;

function wordCount(input) {
	let inputArr = input.split(' ');
	let count = inputArr.length;
	let remaining = wordsRemaining(count);
	let last = inputArr.slice('-1');
	// return wordsRemaining(count);
	return { remaining, last };
}

function wordsRemaining(count) {
	return MAX_WORDS - count;
}

export { wordCount };
