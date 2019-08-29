/**
 * This functionality will determine if the prompt words were used in the user's story.
 */

/**
  * TODO:
  * - 1. get prompt words,
  * - --- 1.a make sure prompt is array
  * - 2. get user's story,
  * - --- 2.a import user story string,
  * - --- 2.b convert story to array of strings
  * - 3. find matches b/w individual words of story and prompt list
  * - 4. if all 3 prompts are matched, return "true"
  * - 5. if any prompt is missing, return "false"
  */

/**
   * MAYBE:
   * - return array of matched prompts,
   * - --- a.) then use that array to change the style of the prompts displayed in the TextEditor, to indicate that those prompts have been used.
   * - ---- OR: b.) highlight the matches in the live text user is working on.
   * - --- OR: c.) BOTH "a." and "b."!?
   */

const REPLACE_REGEX = /[.,\/#!$%\^&\*;:{}=\-_`~()^\s*$/]/g;

// Account for punctuation preceding or following prompt word
const promptCheck = (prompt, last) => {
	let _last = last[0].toLowerCase();
	let cleanedLast = _last.replace(REPLACE_REGEX, '');

	let cleanedPromptArr = prompt.map((e, i) => {
		let _e = e.replace(REPLACE_REGEX, '');
		return _e.toLowerCase();
	});

	let resultOfCheck = cleanedPromptArr.indexOf(cleanedLast);

	if (resultOfCheck != -1) {
		return { index: resultOfCheck, bool: true };
	} else {
		return { index: resultOfCheck, bool: false };
	}
};

const cleanArray = (regex, arr) => {
  
}

/**
 * 
 * CHECK PROMPT INCLUSION 
 * - get prompt array
 * - split story string,
 * - clean new story array,
 * - check story array against prompt array
 */

const promptCheckOnBackspace = (prompt, text) => {
	let story = text.split(', ');
	console.log(story);
	/**
     * split prompt and text,
     * check text arr against prompt arr,
     * return index and bool if false
 */
};

export { promptCheck, promptCheckOnBackspace };
