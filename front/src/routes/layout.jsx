// Vendors
import React from 'react';

// Components
import Header from '../components/header';
import Search from '../components/search';
import Results from '../components/results';

export default class Layout extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			search: ''
		};
	}

	handleChange(search) {
		this.setState({search});
	}

	render () {
		const { search } = this.state;

		return (
			<React.Fragment>
				<div style={{maxWidth: '64rem', margin: 'auto'}}>
					<Header />
					<Search handleChange={(search) => this.handleChange(search)} />
					{search.length > 0 ? <Results search={search} /> : null}
				</div>
			</React.Fragment>
		)
	}
};

