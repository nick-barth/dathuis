// Vendors
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from '../components/header';
import Spinner from '../components/spinner';


export default class Layout extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			data: [],
			isLoading: true
		};

	}

	render () {
		const { isLoading } = this.state;

		return (
			<Route
				render={matchProps => (
					<React.Fragment>
						<Header />
						{isLoading ? <Spinner /> : <div> loading </div>}
					</React.Fragment>
				)}
			/>
		);
	}
}