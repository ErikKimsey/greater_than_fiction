import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import color from '../assets/globals/colors';
import Landing from '../screens/Landing';
import TextEditor from '../screens/TextEditor';
import About from '../screens/About';

import { PublishedStack } from './SharedScreens';

export default (Material = createMaterialBottomTabNavigator(
	{
		Landing: {
			screen: Landing,
			navigationOptions: {
				tabBarLabel: '100 Words',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Ionicons style={[ { color: tintColor } ]} size={25} name={'md-home'} />
					</View>
				)
			}
		},
		TextEditor: {
			screen: PublishedStack,
			navigationOptions: {
				tabBarLabel: 'Go!',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Ionicons style={[ { color: tintColor } ]} size={25} name={'md-create'} />
					</View>
				)
			}
		},
		About: {
			screen: About,
			navigationOptions: {
				// tabBarLabel: 'Home',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Ionicons style={[ { color: tintColor } ]} size={25} name={'md-information-circle'} />
					</View>
				)
			}
		}
		// Published: {
		// 	screen: Published,
		// 	navigationOptions: {
		// 		// tabBarLabel: 'Home',
		// 		// tabBarIcon: ({ tintColor }) => (
		// 		// 	<View>
		// 		// 		<Ionicons style={[ { color: tintColor } ]} size={25} name={'md-information-circle'} />
		// 		// 	</View>
		// 		// )
		// 	}
		// }
	},
	{
		initialRouteName: 'Landing',
		activeColor: '#ffffff',
		inactiveColor: color.gray,
		activeTintColor: color.softRed,
		barStyle: {
			backgroundColor: color.softRed
		}
	}
));
