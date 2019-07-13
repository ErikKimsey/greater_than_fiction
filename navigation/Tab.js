import { createBottomTabNavigator } from 'react-navigation';
import color from '../assets/globals/colors';
import Landing from '../screens/Landing';
import TextEditor from '../screens/TextEditor';
import About from '../screens/About';

export default (Tab = createBottomTabNavigator(
	{
		TextEditor,
		Landing,
		About
	},
	{
		// initialRouteName: 'Landing',
		tabBarOptions: {
			activeTintColor: color.gray,
			activeBackgroundColor: color.softRed,
			inactiveTintColor: color.softRed,
			labelStyle: { fontWeight: 'bold' },
			tabStyle: { paddingBottom: 10 },
			pressColor: '#e91e63',
			labelStyle: {
				fontSize: 20,
				color: color.gray
			}
		}
	}
));
