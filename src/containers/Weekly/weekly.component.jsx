import React, { Component } from 'react';
import { WeatherConsumer } from '../../WeatherContext';

import Daily from '../../components/Daily/daily.component';

class Weekly extends Component {
	render() {
		return (
			<WeatherConsumer>
				{(dailyData) => (
					<div className="weekly-container">
						<div className="container">
							<h1 className="display-1 jumbotron">5 Day Forecast</h1>
							<h5 className="display-5 text-muted">Mandaluyong, PH</h5>
							<div className="row justify-content-center">
								{dailyData.map((reading, index) => <Daily reading={reading} key={index} />)}
							</div>
						</div>
					</div>
				)}
			</WeatherConsumer>
		);
		//<div className="row justify-content-center">{dailyData.map((reading, index) => <Daily reading={reading} key={index} />)}</div>;
	}
}

export default Weekly;
