import React, { Component, createContext } from 'react';

import apiConfig from './api/apiKeys';
const { Provider, Consumer } = createContext();

var moment = require('moment');

class WeatherProvider extends Component {
	state = {
		fullData: [],
		dailyData: [],
		hourlyData: [],
		showHourly: false
	};

	componentDidMount() {
		const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=mandaluyong,ph&APPID=${apiConfig}`;

		fetch(weatherUrl).then((res) => res.json()).then((data) => {
			const dailyData = data.list.filter((reading) => reading.dt_txt.includes('00:00:00'));

			this.setState(
				{
					fullData: data.list,
					dailyData: dailyData
				},
				() => console.log(this.state)
			);
		});
	}

	toggleClickHandler = (index) => {
		const { fullData } = this.state;
		const dateNow = new Date();

		const addDays = (date, days) => {
			const copy = new Date(Number(date));
			copy.setDate(date.getDate() + days);
			return copy;
		};

		const getDateOnly = (date) => {
			const dateTime = date.split(' ');
			const dateSplit = dateTime[0];
			return dateSplit;
		};
		const newDate = addDays(dateNow, index + 1);
		const formatDate = moment(newDate).format('YYYY-MM-DD h:mm:ss');

		const dateOnly = getDateOnly(formatDate);

		const hourly = fullData.filter((reading) => reading.dt_txt.includes(dateOnly));

		this.setState({ showHourly: !this.state.showHourly, hourlyData: hourly });
	};

	render() {
		const { dailyData, fullData, hourlyData, showHourly } = this.state;
		console.log(this.state);
		return (
			<Provider
				value={{
					dailyData: dailyData,
					fullData: fullData,
					hourlyData: hourlyData,
					showHourly: showHourly,
					onToggle: this.toggleClickHandler
				}}
			>
				{this.props.children}
			</Provider>
		);
	}
}

export { WeatherProvider, Consumer as WeatherConsumer };
