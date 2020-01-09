import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import apiConfig from '../../api/apiKeys';
import HourlyCard from './hourly-card.component.jsx';
import { WeatherConsumer } from '../../WeatherContext';

var moment = require('moment');

class Hourly extends Component {
	state = {
		loadedForecast: null
	};

	componentDidMount() {
		const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=mandaluyong,ph&APPID=${apiConfig}`;

		fetch(weatherUrl).then((res) => res.json()).then((data) => {
			const forecastData = data.list.filter((reading) => reading.dt_txt.includes(this.props.match.params.day));
			this.setState({
				loadedForecast: forecastData
			});
		});
	}

	render() {
		console.log(this.props);
		const { loadedForecast } = this.state;
		let post = null;
		if (loadedForecast) {
			post = loadedForecast.map((data, index) => <HourlyCard data={data} key={index} />);
		}
		return (
			<WeatherConsumer>
				{() => (
					<div className="hourly-forecast">
						<h1 className="display-1 jumbotron">Hourly Forecast</h1>
						<div className="row justify-content-center">{post}</div>
					</div>
				)}
			</WeatherConsumer>
		);
	}
}

export default withRouter(Hourly);
