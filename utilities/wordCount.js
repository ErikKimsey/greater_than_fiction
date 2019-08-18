import promptCheck from './promptCheck';

/**
 * Provides word-count functionality.
 */

function wordCount(input) {
	let inputArr = input.split(' ');
	return wordsRemaining(inputArr.length);
}

function callPromptCheck(inputArr){
  
  promptCheck(inputArr.pop);
}

function wordsRemaining(count) {
	return 100 - count;
}

export { wordCount };
