/**
 * generatePrompt
 * As an argument, takes an array of strings.  It uses the array's length to randomize an index with which to create a new arrow of 3 strings.  That array is then joined into a single string to be displayed in the Prompt component.
 */

function generatePrompt(werds) {
	const promptArr = [];
	for (let i = 0; i < 3; i++) {
		let index = randomize(0, werdsLength(werds));
		if (werds[index] === '' || werds[index] === ' ') {
			return generatePrompt(werds);
		} else if (findDuplicates(werds, index) === true) {
			return generatePrompt(werds);
		} else {
			promptArr.push(werds[index]);
		}
	}
	return createPromptString(promptArr);
}

function createPromptString(arr) {
	return arr.join(', ').toUpperCase();
}

function werdsLength(werds) {
	if (werds) {
		return werds.length;
	}
}

function findDuplicates(werds, index) {
	if (index > 0) {
		for (let werd in werds) {
			if (werd === --index) {
				return true;
			} else {
				return false;
			}
		}
	}
}

function randomize(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default generatePrompt;
