// Vendors
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Layouts
import Layout from './routes/layout.jsx';

class App extends Component {
	render () {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Layout exact path="/" />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
