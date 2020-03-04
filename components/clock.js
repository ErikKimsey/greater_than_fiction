import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../assets/globals/colors';

export default class Clock extends Component {
	state = {
		total: 5,
		remainingSec: '59',
		remainingMin: '4',
		isTimedOut: false,
		clock: null,
		isStarted: false
	};

	componentDidMount() {
		this.setClock();
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
		let deadline = now + fiveMin;
		this.clockRunning(deadline, now);
	};

	clockRunning = (deadline, now) => {
		let _now = now;
		let clock;
		clock = setInterval(() => {
			if (_now < deadline - 1000) {
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

	setTimedOut = () => {
		this.setState({ isTimedOut: true });
		return this.props.getIsTimedOut(this.getTimedOut());
	};

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
		if (remainingSec < 1 && remainingMin < 1) {
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
		this.stopClock();
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
					<Text style={[ styles.countdown ]}>
						<Text>{[ this.state.remainingMin ]}</Text>
						<Text>:</Text>
						<Text>{this.state.remainingSec.length < 2 ? `0${this.state.remainingSec}` : this.state.remainingSec}</Text>
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
		color: color.pastelYellow,
		fontWeight: '900',
		fontSize: 28,
		paddingLeft: 10,
		paddingBottom: 4
	}
});
