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

export default class Overview extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			search: '',
		};

	}


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
		const { search } = this.state;

		return (
			<React.Fragment>
				<div className="search__container">
					<input type="text" className="search__textbox" placeholder="Search" onChange={(e) => this.handleChange(e.target.value) } />
				</div>
				<Query query={GET_SEARCH_RESULTS} variables={{searchString: search }}>
					{({ loading, error, data }) => {
						console.log(data);
						if (loading) return (<Spinner />);
						if (error) return `Error!: ${error}`;
						if (data.search[0]) return data.search.map(item => {
							console.log(item);
							return <Card data={item} key={item.last_name} />
						});
						return null;
					}}
				</Query>
			</React.Fragment>
		);
	}
}



