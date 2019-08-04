import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../assets/globals/colors';

export default class Clock extends Component {
	state = {
		total: 5,
		remainingSec: '09',
		remainingMin: '0',
		// remainingSec: '59',
		// remainingMin: '4',
		isTimedOut: false,
		clock: null,
		isStarted: false
	};

	componentDidMount() {
		this.setClock();
		console.log('props');
		console.log(this.props);
	}

	resetClock = () => {
		this.setState({
			remainingMin: '4',
			remainingSec: '59'
		});
	};

	startClock = () => {
		this.setClock();
	};

	setClock = () => {
		var now = new Date().getTime();
		let fiveMin = 60 * 5 * 1000;
		let deadline = now + 10000;
		// let deadline = now + fiveMin;
		this.clockRunning(deadline, now);
	};

	clockRunning = (deadline, now) => {
		let _now = now;
		let clock;
		clock = setInterval(() => {
			if (_now < deadline) {
				_now = new Date().getTime();
				this.calcRemainingTime(_now, deadline);
			} else {
				this.setTimedOut();
				this.stopClock(clock);
			}
		}, 1000);
		this.setState({ clock });
	};

	toggleIsStarted = () => {
		this.setState({ isStarted: !this.state.isStarted });
	};

	setTimedOut = (min, sec) => {
    
		if (min <= 0 && sec <= 0) {
			this.setState({ isTimedOut: true });
			console.log('is timedout');

			console.log(this.getTimedOut());

			return this.props.getIsTimedOut(this.getTimedOut());
		} else {
			return;
		}
	};

	/**
   * if(published)
   * -- stopclokc
   * if(timedout)
   * -- stopclock
   * else {
   * -- keep running
   * }
   * -- tell TextEditor if timedOut
   */

	getTimedOut = () => {
		return this.state.isTimedOut;
	};

	isPublished = () => {
		if (this.props.isPublished === true || this.getTimedOut() === true) {
			this.stopClock();
		}
	};

	calcRemainingTime = (now, deadline) => {
		let difference = deadline - now;
		let remainingMin = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		let remainingSec = Math.floor((difference % (1000 * 60)) / 1000);
		if (this.getTimedOut()) {
			// tell TextEditor timed out
			this.setTimedOut();
			this.stopClock();
		} else {
			remainingSec = remainingSec + '';
			this.setState({
				remainingMin,
				remainingSec
			});
		}
	};

	stopClock = () => {
		clearInterval(this.state.clock);
		this.setState({ isTimedOut: true });
		this.resetClock();
	};

	componentWillUnmount() {
		this.stopClock(this.state.clock);
	}

	render() {
		if (this.state.isTimedOut) {
			return (
				<View>
					<Text>Stop</Text>
				</View>
			);
		} else {
			return (
				<View>
					<Text style={styles.countdown}>
						<Text>{this.state.remainingMin}</Text>
						<Text>:</Text>
						<Text>
							{this.state.remainingSec.length < 2 ? (
								`0${this.state.remainingSec}`
							) : (
								this.state.remainingSec
							)}
						</Text>
					</Text>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {},
	countdown: {
		flexDirection: 'row',
		color: color.softRed,
		fontWeight: '900',
		fontSize: 20,
		paddingLeft: 10,
		paddingBottom: 10
	}
});
