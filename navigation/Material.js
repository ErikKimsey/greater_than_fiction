import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import color from '../assets/globals/colors';
import Landing from '../screens/Landing';
import About from '../screens/About';

import { PublishedStack, LandingStack } from './SharedScreens';

export default (Material = createMaterialBottomTabNavigator(
	{
		Landing: {
			screen: LandingStack,
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
			screen: LandingStack,
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
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Ionicons style={[ { color: tintColor } ]} size={25} name={'md-information-circle'} />
					</View>
				)
			}
		}
	},
	{
		initialRouteName: 'TextEditor',
		activeColor: '#ffffff',
		inactiveColor: color.gray,
		activeTintColor: color.softRed,
		barStyle: {
			backgroundColor: color.softRed
		}
	}
));
