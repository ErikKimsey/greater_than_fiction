/**
 * Clock functionality
 * Count down from 5minutes
 */

/**
   * get now
   * set 5 min from now
   * 
   * -OR-
   * set NOW
   * set 1000 * 60 * 5
   *  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
   *  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   */

const remaining = '';

const startClock = () => {
	let minutes = parseInt(timer / 60, 10);
};

const setClock = () => {
	var now = new Date().getTime();
	let fiveMin = 60 * 5 * 1000;
	let deadline = now + fiveMin;
	console.log(deadline);
	clockRunning(deadline, now);
};

const clockRunning = (deadline, now) => {
	let _now = now;
	let clock;
	if (_now < deadline) {
		clock = setInterval(() => {
			_now = new Date().getTime();
			getRemainingTime(_now, deadline);
		}, 1000);
	} else {
		console.log('Times up!!!!!!!');
		stopClock(clock);
	}
};

const getRemainingTime = (now, deadline) => {
	// console.log(now);
	// console.log(deadline);
	// console.log(now);

	let difference = deadline - now;
	let remainingMin = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	let remainingSec = Math.floor((difference % (1000 * 60)) / 1000);
	// remaining = `${remainingMin} : ${remainingSec}`;
	// console.log(`${remainingMin} : ${remainingSec}`);

	return `${remainingMin} : ${remainingSec}`;
};

const stopClock = (clock) => {
	clearInterval(clock);
};

const outOfTime = () => {};

export { setClock, getRemainingTime };
