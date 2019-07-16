import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import Navigator from './navigation/Material';
import NavigationService from './navigation/NavigationService';

const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
	render() {
		return (
			<AppContainer
				ref={(navigatorRef) => {
					NavigationService.setTopLevelNav(navigatorRef);
				}}
			/>
		);
	}
}
