// Vendors
import React from 'react';

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
  			this.props.handleChange(newValue);
		}, 500);
	}

	render () {
		return (
			<React.Fragment>
				<div className="search">
					<input type="text" className="search__textbox" placeholder="Search" onChange={(e) => this.handleChange(e.target.value) } />
				</div>
			</React.Fragment>
		);
	}
}



