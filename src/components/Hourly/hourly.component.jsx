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
		const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=mandaluyong,ph&APPID=${apiConfig}`;

		fetch(weatherUrl).then((res) => res.json()).then((data) => {
			const forecastData = data.list.filter((reading) => reading.dt_txt.includes(this.props.match.params.day));
			this.setState(
				{
					loadedForecast: forecastData
				},
				() => console.log(this.state)
			);
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
				{({ hourlyData }) => (
					<div className="hourly-forecast">
						<p>{this.props.match.params.dt_txt}</p>
						<h1 className="display-1 jumbotron">Hourly Forecast</h1>
						<div className="row justify-content-center">
							{loadedForecast ? (
								post
							) : (
								hourlyData.map((data, index) => <HourlyCard data={data} key={index} />)
							)}
						</div>
					</div>
				)}
			</WeatherConsumer>
		);
	}
}

const LoadedCard = ({ data }) => {
	let newDate = new Date(data.dt_txt);

	const imgUrl = `owf owf-${data.weather[0].id} owf-5x`;
	const celsius_min = data.main.temp_min - 273.15;
	const celsius_max = data.main.temp_max - 273.15;
	return (
		<div className="card">
			<h3 className="card-title">{moment(newDate).format('dddd')}</h3>
			<p className="text-muted">{moment(newDate).format('MMMM Do, hh:mm a')}</p>
			<i className={imgUrl} />
			<h3>
				<span className="min-temp">{Math.round(celsius_min)} °C -</span>
				<span className="max-temp"> {Math.round(celsius_max)} °C</span>
			</h3>
			<div className="card-body">
				<p className="card-text">{data.weather[0].description}</p>
			</div>
		</div>
	);
};
export default withRouter(Hourly);
