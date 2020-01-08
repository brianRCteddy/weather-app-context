import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import { WeatherConsumer } from '../../WeatherContext';
import Daily from '../../components/Daily/daily.component';
import Hourly from '../../components/Hourly/hourly.component';
import apiConfig from '../../api/apiKeys';

class Weekly extends Component {
	state = {
		loadedForecast: null
	};
	componentDidMount() {
		const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=mandaluyong,ph&APPID=${apiConfig}`;

		fetch(weatherUrl).then((res) => res.json()).then((data) => {
			const forecastData = data.list.filter((reading) => reading.dt_txt.includes(this.props.match.params.dt_txt));
			this.setState(
				{
					loadedForecast: forecastData
				},
				() => console.log(this.state)
			);
		});
	}

	render() {
		const { loadedForecast } = this.state;
		let post = null;
		if (loadedForecast) {
			post = loadedForecast.map((data, index) => <Hourly data={data} key={index} />);
		}
		console.log('Weekly', this.props);
		return (
			<WeatherConsumer>
				{({ showHourly }) => (
					<div className="weekly">
						<p>{this.props.match.params.dt_txt}</p>
						<br />
						{showHourly ? <Hourly /> : <Daily />}
						{post}
					</div>
				)}
			</WeatherConsumer>
		);
	}
}

export default Weekly;
