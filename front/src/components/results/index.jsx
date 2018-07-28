// @flow

// Vendors
import React from 'react';
import { Query } from "react-apollo";

// Queries
import { GET_SEARCH_RESULTS } from '../../queries';

// Components
import Spinner from '../spinner';
import Card from '../card';

// CSS
import './styles.css';

type Props = {
	search: string
}

export default class Results extends React.Component<Props> {

	render () {
		const { search } = this.props;

		return (
			<div className="results">
				<Query query={GET_SEARCH_RESULTS} variables={{searchString: search }}>
					{({ loading, error, data }) => {
						if (loading) return (<div className="results__spinner"> <Spinner /> </div>);
						if (error) return `Error!: ${error}`;
						if (data.search[0]) return data.search.map(item => {
							return <Card data={item} key={item.last_name} />
						});
						return <div className="results__no-results"> 'No results found' </div>;
					}}
				</Query>
			</div>
		);
	}
}



