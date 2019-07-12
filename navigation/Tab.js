import { createBottomTabNavigator } from 'react-navigation';
import Landing from '../screens/Landing';
import TextEditor from '../screens/TextEditor';
// import screen ...
// import screen ...
// import screen ...

export default (Tab = createBottomTabNavigator(
	{
		Landing,
		TextEditor
		// Third
	},
	{
		// initialRouteName: 'Second',
		tabBarOptions: {
			// // //' - Label and icon color of the active tab.'
			// activeTintColor: 'orange',
			// // //' - Background color of the active tab.'
			// activeBackgroundColor: 'green',
			// // //' - Label and icon color of the inactive tab.'
			// inactiveTintColor: 'blue',
			// // //' - Background color of the inactive tab.'
			// inactiveBackgroundColor: 'yellow',
			// // //' - Style object for the tab bar.'
			// style: { borderWidth: 2, borderColor: 'purple' },
			// // //' - Style object for the tab label.'
			// labelStyle: { fontWeight: 'bold' },
			// // //' - Style object for the tab.'
			// tabStyle: { paddingBottom: 16 },
			// // //' - Whether to show label for tab, default is true.'
			// showLabel: false,
			// // //' - Whether to show icon for tab, default is true.'
			// showIcon: false,
		}
	}
));
