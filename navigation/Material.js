import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import color from '../assets/globals/colors';
import About from '../screens/About';

import { LandingStack } from './SharedScreens';

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
		initialRouteName: 'Landing',
		activeColor: '#ffffff',
		inactiveColor: color.gray,
		activeTintColor: color.softRed,
		barStyle: {
			backgroundColor: color.softRed
		}
	}
));
