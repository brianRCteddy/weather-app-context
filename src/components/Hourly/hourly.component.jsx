import React from 'react';

import { WeatherConsumer } from '../../WeatherContext';

var moment = require('moment');

const Hourly = ({ data }) => {
	//const { data } = this.props;
	let newDate = new Date();
	const weekday = data.dt * 1000;
	newDate.setTime(weekday);

	const imgUrl = `owf owf-${data.weather[0].id} owf-5x`;
	const celsius_min = data.main.temp_min - 273.15;
	const celsius_max = data.main.temp_max - 273.15;

	return (
		<WeatherConsumer>
			{({ hourlyData }) => (
				<div>
					<div className="card">
						<h3 className="card-title">{moment(newDate).format('dddd')}</h3>
						<p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
						<i className={imgUrl} />
						<h3>
							<span className="min-temp">{Math.round(celsius_min)} °C -</span>
							<span className="max-temp"> {Math.round(celsius_max)} °C</span>
						</h3>
						<div className="card-body">
							<p className="card-text">{data.weather[0].description}</p>
						</div>
					</div>
				</div>
			)}
		</WeatherConsumer>
	);
};

export default Hourly;
