import React from 'react';

const PlaceholderCard = () => {
	return (
		<div
			className="w-full mx-auto mb-4 rounded-lg border-4 shadow-md p-5 text-gray-800"
			style={{
				maxWidth: '100%',
				minHeight: '196px',
				borderColor: 'rgba(17, 24, 39,0.2)'
			}}
		>
			<div className="w-full flex mb-4">
				<div className="placeholder rounded-full w-12 h-12" />
				<div className="flex-grow pl-3">
					<div className="placeholder mb-2 h-4 w-40 bg-gray-200" />
					<div className="placeholder mb-2 h-4 w-32 bg-gray-200" />
				</div>
			</div>
			<div className="w-full mb-4">
				<div>
					<div className="placeholder mb-2 h-4 w-full bg-gray-200" />
					<div className="placeholder mb-2 h-4 w-40 bg-gray-200" />
				</div>
			</div>
			<div className="w-full flex justify-end">
				<p className="placeholder mb-2 mr-0 h-4 w-32 bg-gray-200" />
			</div>
		</div>
	);
};

export default PlaceholderCard;
