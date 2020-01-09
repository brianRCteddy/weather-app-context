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
		//this.props.match.params.day
		const now = new Date();
		const day1 = now.getDay(now);
		console.log('params', this.props.match.params.day);

		const days = 6;
		const forecastDays = [];

		for (let i = 0; i < days; i++) {
			const day = new Date();
			const addDays = (day) => {
				const copy = new Date(Number(day));
				forecastDays.push(new Date(copy.setDate(day.getDate() + i)));
			};
			addDays(day);
		}

		const getRightDate = (arr) => {
			let rightDate = '';
			const dayNames = [];
			for (let i = 0; i < arr.length; i++) {
				const getDayName = arr[i].toString().split(' ');

				const abrevDay = getDayName[0];
				dayNames.push(abrevDay);

				if (this.props.match.params.day === abrevDay) {
					rightDate = arr[i];
					break;
				}
			}
			return rightDate;
		};
		const rightDate = getRightDate(forecastDays);
		const formattedDate = moment(rightDate).format('YYYY-MM-DD');

		fetch(weatherUrl).then((res) => res.json()).then((data) => {
			const forecastData = data.list.filter((reading) => reading.dt_txt.includes(formattedDate));
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
