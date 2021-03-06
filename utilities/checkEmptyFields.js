/**
 * isEmpty()
 * params: array of text, author, title input
 * Checks if input is empty.
 */

function isEmpty(input) {
	let empty = null;
	input.forEach((e) => {
		if (e.length === 0) {
			console.log(`You have an empty input somehwere.`);
			empty = true;
		} else {
			empty = false;
		}
	});
	return empty;
}

export default isEmpty;
