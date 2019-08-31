import React, { Component } from 'react';
import {} from 'react-native';
import * as Font from 'expo-font';

/**
 * - Font.loadAsync w/ Promise,
 * - set fetched fonts to state,
 * - getter for individal fonts
 */

export default class fontAsyncLoad extends Component {
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
    }
  }

	async componentDidMount() {
		await Promise.all([
			Font.loadAsync({
				'lemon-milk': require('../assets/fonts/LemonMilk.otf'),
				dayrom: require('../assets/fonts/DAYROM.ttf'),
				painterz: require('../assets/fonts/Painterz.ttf'),
				cubesity: require('../assets/fonts/cubesity.ttf'),
				fatC: require('../assets/fonts/FatC.ttf'),
				fatCat: require('../assets/fonts/FatCat.ttf'),
				slukoni: require('../assets/fonts/Slukoni.otf')
			})
		]).then((res) => {
			let dims = new PercentageDimensions(0.99, 0.95);
			dims.calcPaddedDimensions();
			this.setState({ fontLoaded: true });
		});
		// const { height, width } = this.props.navigation.state.params;
  }
  
  

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
