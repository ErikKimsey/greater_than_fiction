import { createStackNavigator } from 'react-navigation';
import Published from '../screens/Published';
import TextEditor from '../screens/TextEditor';
import Landing from '../screens/Landing';
import Go from '../screens/Go';

const commonScreens = {
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

const LandingStack = createStackNavigator(
	{
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
		},
		...commonScreens
	},
	{
		// initialRoute: 'Landing',
		defaultNavigationOptions: {
			unmountInactiveRoutes: true
		}
	}
);

export { LandingStack };
