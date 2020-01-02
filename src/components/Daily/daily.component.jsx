import React from 'react';

import './daily.styles.css';

var moment = require('moment');

const Daily = ({ reading }) => {
	let newDate = new Date();
	const weekday = reading.dt * 1000;
	newDate.setTime(weekday);

	const imgUrl = `owf owf-${reading.weather[0].id} owf-5x`;

	return (
		<div className="col-sm-2">
			<div className="card">
				<h3 className="card-title">{moment(newDate).format('dddd')}</h3>
				<p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
				<i className={imgUrl} />
				<h3>
					<span className="min-temp">{Math.round(reading.main.temp_min)} °F </span>
					<span className="max-temp">{Math.round(reading.main.temp_max)} °F</span>
				</h3>
				<div className="card-body">
					<p className="card-text">{reading.weather[0].description}</p>
				</div>
			</div>
		</div>
	);
};

export default Daily;
