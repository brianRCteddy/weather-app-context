import React, { Component } from 'react';

import { WeatherConsumer } from '../../WeatherContext';
import Daily from '../../components/Daily/daily.component';

class Weekly extends Component {
	render() {
		return (
			<WeatherConsumer>
				{() => (
					<div className="weekly">
						<br />
						<Daily />
					</div>
				)}
			</WeatherConsumer>
		);
	}
}

export default Weekly;
