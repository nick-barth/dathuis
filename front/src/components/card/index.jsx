// Vendors
import React from 'react';

// CSS
import './styles.css';

const Card = ({data}) => (
	<div className="card">
		<img className="card__img" src={data.photo} alt={`${data.first_name} ${data.last_name}`} />
		<div className="card__title">
			{data.first_name} {data.last_name}
		</div>
		<div className="card__subtitle">
			{data.origin}
		</div>
	</div>
);

export default Card;
