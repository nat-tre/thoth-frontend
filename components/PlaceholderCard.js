import React from 'react';
import Spinner from './Spinner';

const PlaceholderCard = () => {
	return (
		<div
			className="w-full mx-auto mb-4 rounded-lg border-4 shadow-md p-5 flex justify-center items-center"
			style={{
				maxWidth: '100%',
				height: '196px',
				borderColor: 'rgba(17, 24, 39,0.2)'
			}}
		>
			<Spinner />
		</div>
	);
};

export default PlaceholderCard;
