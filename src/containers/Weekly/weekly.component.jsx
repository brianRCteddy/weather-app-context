import React, { Component } from 'react';
import { WeatherConsumer } from '../../WeatherContext';

import Daily from '../../components/Daily/daily.component';
import Hourly from '../../components/Hourly/hourly.component';

class Weekly extends Component {
	state = {
		showHourly: false
	};

	toggleClickHandler = () => {
		this.setState({ showHourly: !this.state.showHourly });
	};

	render() {
		return (
			<WeatherConsumer>
				{({ dailyData, hourlyData }) => (
					<div className="weekly-container">
						<div className="container">
							<h1 className="display-1 jumbotron">5 Day Forecast</h1>
							<h5 className="display-5 text-muted">Mandaluyong, PH</h5>
							<div className="row justify-content-center">
								{dailyData.map((reading, index) => (
									<Daily reading={reading} key={index} onToggleClick={this.toggleClickHandler} />
								))}
							</div>
							<br />
							{this.state.showHourly ? (
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
		//<div className="row justify-content-center">{dailyData.map((reading, index) => <Daily reading={reading} key={index} />)}</div>;
	}
}

export default Weekly;
