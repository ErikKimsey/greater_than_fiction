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

const promptCheck = (prompt, story) => {
	let newCheck = story.split(' ').pop;
	let promptArr = prompt.split(' ');
	let resultOfCheck = promptArr.indexOf(newCheck);
	if (resultOfCheck != -1) {
		return resultOfCheck;
	} else {
	}
};

export default promptCheck;
