import React from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom';

import Weekly from './containers/Weekly/weekly.component';
import Daily from './components/Daily/daily.component';
import Hourly from './components/Hourly/hourly.component';
import Header from './components/Header/header.component';
import './App.css';

function Bla(props) {
	console.log(props);
	return <h1>Hourly</h1>;
}

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Weekly} />
				<Route exact path="/:dt_txt" component={Weekly} />
				{/* <Route exact path="/:dt_txt" component={Bla} /> */}
			</Switch>
		</div>
	);
}

export default App;
