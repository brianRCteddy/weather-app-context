import React, { Component } from 'react';
import apiConfig from '../../api/apiKeys';

class Weekly extends Component {
	state = {
		weeklyData: [],
		dailyData: []
	};
	componentDidMount() {
		const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig}`;

		fetch(weatherUrl).then((res) => res.json()).then((data) => console.log(data.list));
	}
	render() {
		return <div>Daily</div>;
	}
}

export default Weekly;

const manda = 'http://api.openweathermap.org/data/2.5/forecast?q=Mandaluyong,ph=1ac7b28236178180729716f442627ad1';
