import { createStackNavigator } from 'react-navigation';
import Published from '../screens/Published';
import TextEditor from '../screens/TextEditor';
import Landing from '../screens/Landing';
import Go from '../screens/Go';

const commonScreens = {
	TextEditor: {
		screen: TextEditor,
		navigationOptions: {
			header: null
		}
	},
	Published: {
		screen: Published,
		navigationOptions: {
			header: null
		}
	},
	Landing: {
		screen: Landing,
		navigationOptions: {
			header: null
		}
	},
	Go: {
		screen: Go,
		navigationOptions: {
			header: null
		}
	},
	TextEditor: {
		screen: TextEditor,
		navigationOptions: {
			header: null
		}
	},
	Published: {
		screen: Published,
		navigationOptions: {
			header: null
		}
	}
};

const PublishedStack = createStackNavigator({
	TextEditor: {
		screen: TextEditor,
		navigationOptions: {
			header: null
		}
	},
	...commonScreens
});

const LandingStack = createStackNavigator({
	TextEditor: {
		screen: TextEditor,
		navigationOptions: {
			header: null
		}
	},
	Landing: {
		screen: Landing,
		navigationOptions: {
			header: null
		}
	},
	...commonScreens
});

export { PublishedStack, LandingStack };
