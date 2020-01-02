import React, { Component, createContext } from 'react';
import apiConfig from './api/apiKeys';

const { Provider, Consumer } = createContext();

class WeatherProvider extends Component {
	state = {
		weeklyData: [],
		dailyData: [],
		city: '',
		country: ''
	};

	componentDidMount() {
		const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=mandaluyong,ph&APPID=${apiConfig}`;

		fetch(weatherUrl).then((res) => res.json()).then((data) => {
			const dailyData = data.list.filter((reading) => reading.dt_txt.includes('18:00:00'));
			this.setState(
				{
					weeklyData: data.list,
					dailyData: dailyData
				},
				() => console.log(this.state)
			);
		});
	}

	render() {
		const { dailyData } = this.state;
		return <Provider value={dailyData}>{this.props.children}</Provider>;
	}
}

export { WeatherProvider, Consumer as WeatherConsumer };
