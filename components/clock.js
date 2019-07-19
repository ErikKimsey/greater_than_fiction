import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../assets/globals/colors';

export default class Clock extends Component {
	state = {
		total: 5,
		remainingSec: '59',
		remainingMin: '4',
		timesUp: false,
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
			if (_now < deadline) {
				_now = new Date().getTime();
				this.calcRemainingTime(_now, deadline);
				this.getTimesUp();
			} else {
				this.getTimesUp();
				this.stopClock(clock);
			}
		}, 1000);
		this.setState({ clock });
	};

	toggleIsStarted = () => {
		this.setState({ isStarted: !this.state.isStarted });
	};

	getTimesUp = () => {
		return this.props.remaining(this.state.timesUp);
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
		clearInterval(this.state.clock);
		this.setState({ timesUp: true });
	};

	componentWillUnmount() {
		console.log('>>>> ', this.props.reset);
		this.stopClock(this.state.clock);
	}

	render() {
		if (this.state.timesUp) {
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
						{this.state.remainingSec.length === 1 ? (
							`'0' ${this.state.remainingSec}`
						) : (
							this.state.remainingSec
						)}
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
