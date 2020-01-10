import React from 'react';
import { withRouter } from 'react-router-dom';

import { WeatherConsumer } from '../../WeatherContext';

import './daily.styles.css';
import DailyCard from './daily-card.component';

const Daily = () => {
	return (
		<WeatherConsumer>
			{({ dailyData }) => (
				<div className="daily-forecast">
					<h1 className="display-1 jumbotron">5 Day Forecast</h1>
					<div className="row justify-content-center">
						{dailyData.map((reading, index) => <DailyCard reading={reading} key={index} index={index} />)}
					</div>
				</div>
			)}
		</WeatherConsumer>
	);
};

export default withRouter(Daily);
