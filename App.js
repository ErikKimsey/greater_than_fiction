import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { LandingStack } from './navigation/SharedScreens';
import NavigationService from './navigation/NavigationService';

const AppContainer = createAppContainer(LandingStack);

export default class App extends Component {
	render() {
		return (
			<AppContainer
				ref={(navigatorRef) => {
					NavigationService.setTopLevelNav(navigatorRef);
				}}
			/>
			// <AppContainer />
		);
	}
}
