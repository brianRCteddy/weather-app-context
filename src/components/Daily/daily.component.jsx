import React, { Component } from 'react';

import './daily.styles.css';
//import Hourly from '../Hourly';
var moment = require('moment');

class Daily extends Component {
	state = {
		showHourly: false
	};

	handleClick = () => {
		this.setState({ showHourly: !this.state.showHourly });
	};

	render() {
		const { reading } = this.props;
		let newDate = new Date();
		const weekday = reading.dt * 1000;
		newDate.setTime(weekday);

		const imgUrl = `owf owf-${reading.weather[0].id} owf-5x`;
		const celsius_min = reading.main.temp_min - 273.15;
		const celsius_max = reading.main.temp_max - 273.15;

		return (
			<div className="col-sm-2">
				<div className="card" onClick={this.handleClick}>
					<h3 className="card-title">{moment(newDate).format('dddd')}</h3>
					<p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
					<i className={imgUrl} />
					<h3>
						<span className="min-temp">{Math.round(celsius_min)} °C -</span>
						<span className="max-temp"> {Math.round(celsius_max)} °C</span>
					</h3>
					<div className="card-body">
						<p className="card-text">{reading.weather[0].description}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Daily;
