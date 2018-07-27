// Vendors
import React from 'react';
import { Query } from "react-apollo";

// Queries
import { GET_SEARCH_RESULTS } from '../../queries';

export default class Overview extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			search: '',
		};

	}

	render () {
		return (
			<Query query={GET_SEARCH_RESULTS} variables={{searchString: 'ee'}}>
				{({ loading, error, data }) => {
					console.log(loading);
				if (loading) return null;
				if (error) return `Error!: ${error}`;
				console.log(data);
				return (
					<div> shit </div>
				);
				}}
			</Query>
		);
	}
}


