import React from 'react';

import { WeatherConsumer } from './WeatherContext';
import Weekly from './containers/Weekly/weekly.component';
import Header from './components/Header/header.component';
import Hourly from './components/Hourly/hourly.component';
import './App.css';

function App() {
	return (
		<WeatherConsumer>
			{({ showHourly }) => (
				<div className="App">
					<Header />
					<Weekly />
					{/* <Hourly /> */}
				</div>
			)}
		</WeatherConsumer>
	);
}

export default App;
