// Vendors
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

// App
import App from './app.jsx';

// CSS - doing monolithic css, not setting up webpack.
import './index.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
