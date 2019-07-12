import { createBottomTabNavigator } from 'react-navigation';
import color from '../assets/globals/colors';
import Landing from '../screens/Landing';
import TextEditor from '../screens/TextEditor';
import About from '../screens/About';

console.log(color);

// import screen ...
// import screen ...
// import screen ...

export default (Tab = createBottomTabNavigator(
	{
		Landing,
		TextEditor,
		About
	},
	{
		// initialRouteName: 'Second',
		tabBarOptions: {
			activeTintColor: color.gray,
			activeBackgroundColor: color.softRed,
			// // //' - Label and icon color of the inactive tab.'
			inactiveTintColor: color.softRed,
			// // //' - Background color of the inactive tab.'
			// inactiveBackgroundColor: 'yellow',
			// // //' - Style object for the tab bar.'
			// style: { borderWidth: 2, borderColor: 'purple' },
			// // //' - Style object for the tab label.'
			labelStyle: { fontWeight: 'bold' },
			// // //' - Style object for the tab.'
			tabStyle: { paddingBottom: 10 },
			pressColor: '#e91e63',
			labelStyle: {
				fontSize: 20
			}
			// // //' - Whether to show label for tab, default is true.'
			// showLabel: false,
			// // //' - Whether to show icon for tab, default is true.'
			// showIcon: false,
		}
	}
));
