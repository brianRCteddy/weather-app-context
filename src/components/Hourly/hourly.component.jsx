import React from 'react';
import { withRouter } from 'react-router-dom';

import HourlyCard from './hourly-card.component.jsx';
import { WeatherConsumer } from '../../WeatherContext';

const Hourly = () => {
	return (
		<WeatherConsumer>
			{({ hourlyData }) => (
				<div className="hourly-forecast">
					<h1 className="display-1 jumbotron">Hourly Forecast</h1>
					<div className="row justify-content-center">
						{hourlyData.map((data, index) => <HourlyCard data={data} key={index} />)}
					</div>
				</div>
			)}
		</WeatherConsumer>
	);
};
export default withRouter(Hourly);
