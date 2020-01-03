import React, { Component, createContext } from 'react';

import apiConfig from './api/apiKeys';
const { Provider, Consumer } = createContext();

var moment = require('moment');

class WeatherProvider extends Component {
	state = {
		fullData: [],
		dailyData: [],
		hourlyData: []
	};

	componentDidMount() {
		const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=mandaluyong,ph&APPID=${apiConfig}`;

		const toJSDate = (dT) => {
			const dateTime = dT.split(' ');
			const date = dateTime[0].split('-');

			const year = date[0];
			const month = date[1];
			const day = Number(date[2]) + 1;
			let newDay = '' + day.toString();

			if (newDay.length < 2) {
				newDay = '0' + newDay;
			}

			const transformedDate = [ year, month, newDay ].join('-');

			return transformedDate;
		};

		fetch(weatherUrl).then((res) => res.json()).then((data) => {
			const dateNow = new Date();
			console.log(dateNow);

			const formattedDateTime = moment.utc(dateNow).format('YYYY-MM-DD h:mm:ss');
			const final = formattedDateTime.toString();

			const formattedDate = toJSDate(final);

			const dailyData = data.list.filter((reading) => reading.dt_txt.includes('18:00:00'));

			const hourlyData = data.list.filter((reading) => reading.dt_txt.includes(formattedDate));
			this.setState(
				{
					fullData: data.list,
					dailyData: dailyData,
					hourlyData: data.list
				},
				() => console.log(this.state)
			);
		});
	}

	hourlyClickHandler = () => {};

	render() {
		const { dailyData, fullData, hourlyData } = this.state;
		return <Provider value={{ dailyData, fullData, hourlyData }}>{this.props.children}</Provider>;
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
