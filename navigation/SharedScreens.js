import { createStackNavigator } from 'react-navigation';
import Published from '../screens/Published';
import TextEditor from '../screens/TextEditor';

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

export { PublishedStack };
