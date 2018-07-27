// Vendors
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from '../components/header';
import Search from '../components/search';


export default class Layout extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			data: 'wow'
		};

	}

	render () {

		return (
			<Route
				render={matchProps => (
					<React.Fragment>
						<Header />
						<Search />
					</React.Fragment>
				)}
			/>
		);
	}
}
