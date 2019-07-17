import * as Font from 'expo-font';

let fontList = {};

async function retrieveFonts() {
	await Font.loadAsync({
		'lemon-milk': require('./LemonMilk.otf'),
		dayrom: require('./DAYROM.ttf'),
		painterz: require('./Painterz.ttf'),
		cubesity: require('./cubesity.ttf'),
		fatC: require('./FatC.ttf'),
		fatCat: require('./FatCat.ttf'),
		slukoni: require('./Slukoni.otf')
	});
	fontList = {
		lemonMilk: 'lemon-milk',
		dayrom: 'dayrom',
		painterz: 'painterz',
		cubesity: 'cubesity',
		fatC: 'fatC',
		fatCat: 'fatCat',
		slukoni: 'slukoni'
	};
	return fontList;
}

retrieveFonts();

export default retrieveFonts;
export { fontList };
