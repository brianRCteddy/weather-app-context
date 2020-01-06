import React from 'react';
import { WeatherConsumer } from '../../WeatherContext';

import Daily from '../../components/Daily/daily.component';
import Hourly from '../../components/Hourly/hourly.component';

const Weekly = () => {
	return (
		<WeatherConsumer>
			{({ dailyData, hourlyData, showHourly }) => (
				<div className="weekly-container">
					<div className="container">
						<h1 className="display-1 jumbotron">5 Day Forecast</h1>
						<h5 className="display-5 text-muted">London, UK</h5>
						<div className="row justify-content-center">
							{dailyData.map((reading, index) => <Daily reading={reading} key={index} index={index} />)}
						</div>
						<br />
						{showHourly ? (
							<div className="container">
								<h1 className="display-1 jumbotron">Hourly Forecast</h1>
								<div className="row justify-content-center">
									{hourlyData.map((data, index) => <Hourly data={data} key={index} />)}
								</div>
							</div>
						) : (
							<h1>Click a Card</h1>
						)}
					</div>
				</div>
			)}
		</WeatherConsumer>
	);
};

export default Weekly;
