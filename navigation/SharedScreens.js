import { createStackNavigator } from 'react-navigation';
import Published from '../screens/Published';
import TextEditor from '../screens/TextEditor';
import Landing from '../screens/Landing';
import Go from '../screens/Go';

const commonScreens = {
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
	}
});

export { PublishedStack, LandingStack };
