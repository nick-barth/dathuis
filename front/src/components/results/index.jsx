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

export default class Results extends React.Component {

	// Implementation from https://medium.com/@TCAS3/debounce-deep-dive-javascript-es6-e6f8d983b7a1
	debounce = (fn, time) => {
		let timeout;

		const functionCall = () => fn.apply(this, arguments);

		clearTimeout(timeout);
		timeout = setTimeout(functionCall, time);
	}

	handleChange(newValue) {
		this.debounce(() => {
  			this.setState({ search: newValue})
		}, 500);
	}

	render () {
		const { search } = this.props;

		return (
			<div className="results">
				<Query query={GET_SEARCH_RESULTS} variables={{searchString: search }}>
					{({ loading, error, data }) => {
						console.log(data);
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



