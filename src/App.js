import React from 'react';

import { WeatherConsumer } from './WeatherContext';
import Weekly from './containers/Weekly/weekly.component';
import Header from './components/Header/header.component';
import Hourly from './components/Hourly/hourly.component';
import './App.css';

function App() {
	return (
		<WeatherConsumer>
			{({ fullData }) => (
				<div className="App">
					<Header />
					<Weekly fulldata={fullData} />
					{/* <Hourly hourly={hourlyData} /> */}
				</div>
			)}
		</WeatherConsumer>
	);
}

export default App;
