import React, { Component } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Overview from './routes/overview';

import Layout from './routes/layout.jsx';

class App extends Component {
	render () {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Layout exact path="/" component={Overview} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
