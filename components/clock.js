import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../assets/globals/colors';

/**
 * Clock functionality
 * Count down from 5minutes
 */

/**
   * get now
   * set 5 min from now
   * 
   * -OR-
   * set NOW
   * set 1000 * 60 * 5
   *  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
   *  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   */

export default class clock extends Component {
	state = {
		total: 5,
		remainingSec: '59',
		remainingMin: '4',
		timesUp: false,
		clock: null
	};

	componentDidMount() {
		this.setClock();
	}

	startClock = () => {
		this.setClock();
	};

	setClock = () => {
		var now = new Date().getTime();
		let fiveMin = 60 * 5 * 1000;
		let deadline = now + fiveMin;
		console.log(deadline);
		this.clockRunning(deadline, now);
	};

	clockRunning = (deadline, now) => {
		let _now = now;
		let clock;
		if (_now < deadline) {
			clock = setInterval(() => {
				_now = new Date().getTime();
				this.calcRemainingTime(_now, deadline);
			}, 1000);
		} else {
			console.log('Times up!!!!!!!');
			this.stopClock(clock);
		}
		this.setState({ clock });
	};

	calcRemainingTime = (now, deadline) => {
		let difference = deadline - now;
		let remainingMin = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		let remainingSec = Math.floor((difference % (1000 * 60)) / 1000);
		this.setState({
			remainingMin,
			remainingSec
		});
	};

	stopClock = () => {
		clearInterval(this.state.clocl);
		this.setState({ timesUp: true });
	};

	componentWillUnmount() {
		this.stopClock(this.state.clock);
	}

	render() {
		if (this.state.timesUp) {
			<View>
				<Text>Stop</Text>
			</View>;
		} else {
			return (
				<View>
					<Text style={styles.countdown}>
						Time remaing: {`${this.state.remainingMin}:${this.state.remainingSec}`}
					</Text>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {},
	countdown: {
		color: color.gray,
		fontWeight: '900',
		fontSize: 20,
		paddingLeft: 10,
		paddingBottom: 10
	}
});
