import React from 'react';

import Weekly from './containers/Weekly/weekly.component';
import Header from './components/Header/header.component';
import Hourly from './components/Hourly/hourly.component';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Weekly />
		</div>
	);
}

export default App;
