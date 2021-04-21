import React from 'react';
import PredictForm from './PredictForm';

const Predict = (props) => {
	return (
		<div id="predict">
			<div className="mt-20 sm:mt-0 leading-normal tracking-normal text-gray-900">
				<div className="h-screen bg-right bg-cover">
					<div className="container px-6 mx-auto flex flex-wrap md:flex-row h-screen items-center justify-center">
						<PredictForm predict={props.predict}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Predict;
