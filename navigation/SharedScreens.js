import { createStackNavigator, createAppContainer } from 'react-navigation';
import Published from '../screens/Published';
import TextEditor from '../screens/TextEditor';

const commonScreens = {
	Published: {
		screen: Published
	}
};

const PublishedStack = createStackNavigator({
	TextEditor: {
		screen: TextEditor
	},
	...commonScreens
});

export { PublishedStack };
