// Vendors
import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './app.jsx';

// CSS - doing monolithic css, not setting up webpack.
import './index.css';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
