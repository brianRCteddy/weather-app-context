import React from 'react';

import { WeatherConsumer } from '../../WeatherContext';

const Hourly = () => {
	return (
		<WeatherConsumer>
			{({ fullData }) => (
				<div>
					<ul>{fullData.map((reading) => <li key={reading.dt}>{reading}</li>)}</ul>
				</div>
			)}
		</WeatherConsumer>
	);
};

export default Hourly;
