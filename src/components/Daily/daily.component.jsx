import React, { Component } from 'react';

import { WeatherConsumer } from '../../WeatherContext';

import './daily.styles.css';
var moment = require('moment');

const Daily = () => {
	return (
		<WeatherConsumer>
			{({ onToggle, dailyData }) =>
				dailyData.map((reading) => (
					<div className="col-sm-2">
						<div className="card" onClick={onToggle}>
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
					</div>
				))}
		</WeatherConsumer>
	);
};

export default Daily;
