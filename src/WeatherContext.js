import React, { Component, createContext } from 'react';

import apiConfig from './api/apiKeys';
const { Provider, Consumer } = createContext();

var moment = require('moment');

class WeatherProvider extends Component {
	state = {
		fullData: [],
		dailyData: [],
		hourlyDataPrac: [],
		hourlyData: {
			first: [],
			second: [],
			third: [],
			fourth: [],
			fifth: []
		}
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

			const formattedDateTime = moment(dateNow).format('YYYY-MM-DD h:mm:ss');
			const final = formattedDateTime.toString();

			//to output Friday
			//const firstDay = moment(dateNow).format('dddd');

			const formattedDate = toJSDate(final);

			const dailyData = data.list.filter((reading) => reading.dt_txt.includes(formattedDate));

			const hourlyDataPrac = data.list.filter((reading) => reading.dt_txt);
			this.setState(
				{
					fullData: data.list,
					dailyData: dailyData
					// hourlyDate: {
					// 	first:
					// }
				},
				() => console.log(this.state)
			);
		});
	}

	render() {
		const { dailyData, fullData } = this.state;
		return <Provider value={{ dailyData, fullData }}>{this.props.children}</Provider>;
	}
}

export { WeatherProvider, Consumer as WeatherConsumer };
