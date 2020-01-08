import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Weekly from './containers/Weekly/weekly.component';
import Hourly from './components/Hourly/hourly.component';

import './App.css';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/:day" component={Hourly} />
				<Route exact path="/" component={Weekly} />
			</Switch>
		</div>
	);
}

export default App;
