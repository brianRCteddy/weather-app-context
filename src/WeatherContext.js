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

		fetch(weatherUrl).then((res) => res.json()).then((data) => {
			const newDate = addDays(dateNow, 4);
			const formatDate = moment(newDate).format('YYYY-MM-DD h:mm:ss');

			const dateOnly = getDateOnly(formatDate);
			console.log(dateOnly);

			const dailyData = data.list.filter((reading) => reading.dt_txt.includes('00:00:00'));

			const hourlyData = data.list.filter((reading) => reading.dt_txt.includes(dateOnly));
			this.setState(
				{
					fullData: data.list,
					dailyData: dailyData,
					hourlyData: hourlyData
				},
				() => console.log(this.state)
			);
		});
	}

	toggleClickHandler = () => {
		this.setState({ showHourly: !this.state.showHourly });
	};

	render() {
		const { dailyData, fullData, hourlyData, showHourly } = this.state;
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

/////////

//to output Friday
//const firstDay = moment(dateNow).format('dddd');

// const newDailyData = {
// 	...dailyData[0],
// 	day: 'Friday'
// };
// console.log(newDailyData);

// const finalDailyData = data.list.filter((reading) => reading.dt_txt.includes('Friday'));
