/**
 * generatePrompt
 * As an argument, takes an array of strings.  It uses the array's length to randomize an index with which to create a new arrow of 3 strings.  That array is then joined into a single string to be displayed in the Prompt component.
 */

const promptArr = [];

const generatePrompt = (werds) => {
	for (let i = 0; i < 3; i++) {
		let index = randomize(0, werdsLength(werds));
		promptArr.push(werds[index]);
	}
	return createPromptString(promptArr);
};

const createPromptString = (arr) => {
	return arr.join(', ').toUpperCase();
};

const werdsLength = (werds) => {
	if (werds) {
		return werds.length;
	}
};

const randomize = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default generatePrompt;
