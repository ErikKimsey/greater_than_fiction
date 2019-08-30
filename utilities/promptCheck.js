/**
 * This functionality will determine if the prompt words were used in the user's story.
 */
const REPLACE_REGEX = /[.,\/#!$%\^&\*;:{}=\-_`~()^\s*$/]/g;

const cleanAndLowerCase = (text) => {
	return text.replace(REPLACE_REGEX, '').toLowerCase();
};

const promptCheck = (story, promptArr) => {
	let _story = cleanAndLowerCase(story);

	let checkedArr = promptArr.map((e, i) => {
		let cE = cleanAndLowerCase(e);
		return { index: i, bool: _story.includes(cE) };
	});
	return checkedArr;
};

export default promptCheck;
