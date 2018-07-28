// @flow

// Vendors
import React from 'react';

// CSS
import './styles.css';

type Props = {
	handleChange: (string) => void
}

export default class Search extends React.Component<Props> {

	// Implementation from https://medium.com/@TCAS3/debounce-deep-dive-javascript-es6-e6f8d983b7a1
	debounce = (fn:any, time:number) => {
		let timeout;

		const functionCall = () => fn.apply(this, arguments);

		clearTimeout(timeout);
		timeout = setTimeout(functionCall, time);

		console.log(fn);

	}

	render () {
		const { handleChange } = this.props;

		return (
			<React.Fragment>
				<div className="search">
					<input
						type="text"
						className="search__textbox"
						placeholder="Search"
						onChange={(e) => {
							const change = e.target.value;
							this.debounce(() => {
								handleChange(change);
							}, 500)}
						}
					/>
				</div>
			</React.Fragment>
		);
	}
}



