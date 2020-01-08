import React, { useEffect } from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';

import { WeatherConsumer } from '../../WeatherContext';

import './daily.styles.css';
var moment = require('moment');

const DailyCard = ({ reading, index }) => {
	console.log(reading.weather[0].id);
	let newDate = new Date(reading.dt_txt);

	const imgUrl = `owf owf-${reading.weather[0].id} owf-5x`;
	const celsius_min = reading.main.temp_min - 273.15;
	const celsius_max = reading.main.temp_max - 273.15;

	const splitUrl = reading.dt_txt.split(' ');
	const linkUrl = splitUrl[0];
	return (
		<WeatherConsumer>
			{({ onToggle }) => (
				<div className="col-sm-2">
					<div className="card" onClick={() => onToggle(index)}>
						<h3 className="card-title">{moment(newDate).format('dddd')}</h3>
						<p className="text-muted">{moment(newDate).format('MMMM Do, hh:mm a')}</p>
						<NavLink to={'/' + linkUrl}>
							<i className={imgUrl} />
						</NavLink>
						<h3>
							<span className="min-temp">{Math.round(celsius_min)} °C -</span>
							<span className="max-temp"> {Math.round(celsius_max)} °C</span>
						</h3>
						<div className="card-body">
							<p className="card-text">{reading.weather[0].description}</p>
						</div>
					</div>
				</div>
			)}
		</WeatherConsumer>
	);
};

export default DailyCard;
