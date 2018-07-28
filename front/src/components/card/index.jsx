// @flow

// Vendors
import React from 'react';

// CSS
import './styles.css';

type Props = {
  data: {
	  first_name: string,
	  last_name: string,
	  photo: string,
	  origin: string
  }
};

const Card = (props:Props) => {
	const { first_name, last_name, photo, origin } = props.data;

	return (
		<div className="card">
			<img className="card__img" src={photo} alt={`${first_name} ${last_name}`} />
			<div className="card__title">
				{first_name} {last_name}
			</div>
			<div className="card__subtitle">
				{origin}
			</div>
		</div>
	)
}

export default Card;
