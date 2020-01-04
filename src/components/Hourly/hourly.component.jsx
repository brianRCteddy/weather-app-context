import React from 'react';

import { WeatherConsumer } from '../../WeatherContext';

var moment = require('moment');

const Hourly = () => {
	return (
		<WeatherConsumer>
			{({ hourlyData }) =>
				hourlyData.map((reading, index) => (
					<div className="card" key={index}>
						<h3 className="card-title">{moment(reading.dt * 1000).format('dddd')}</h3>
						<p className="text-muted">{moment(reading.dt * 1000).format('MMMM Do, h:mm a')}</p>
						<i className={`owf owf-${reading.weather[0].id} owf-5x`} />
						<h3>
							<span className="min-temp">{Math.round(reading.main.temp_min - 273.15)} °C -</span>
							<span className="max-temp"> {Math.round(reading.main.temp_max - 273.15)} °C</span>
						</h3>
						<div className="card-body">
							<p className="card-text">{reading.weather[0].description}</p>
						</div>
					</div>
				))}
		</WeatherConsumer>
	);
};

export default Hourly;
