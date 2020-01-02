import React, { Component } from 'react';
import apiConfig from '../../api/apiKeys';

import Daily from '../../components/Daily/daily.component';

class Weekly extends Component {
	state = {
		weeklyData: [],
		dailyData: []
	};
	componentDidMount() {
		const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig}`;

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

	formatDay = () => {
		return this.state.dailyData.map((reading, index) => <Daily reading={reading} key={index} />);
	};

	render() {
		return (
			<div className="daily-container">
				<div className="container">
					<h1 className="display-1 jumbotron">5 Day Forecast</h1>
					<h5 className="display-5 text-muted">New York, US</h5>
					<div className="row justify-content-center">{this.formatDay()}</div>
				</div>
			</div>
		);
		//<div className="row justify-content-center">{dailyData.map((reading, index) => <Daily reading={reading} key={index} />)}</div>;
	}
}

export default Weekly;

//http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=1ac7b28236178180729716f442627ad1
