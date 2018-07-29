
// @flow

// Vendors
import React from 'react';

// Components
import Header from '../components/header';
import Search from '../components/search';
import Results from '../components/results';

type Props = {};
type State = {
	search: string
}

export default class Layout extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			search: ''
		};
	}

	handleChange(search: string):void {
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

