import React, { useState } from 'react';

const PredictForm = (props) => {
	const [ text, setText ] = useState('');

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.predict(text);
		setText('');
	};

	return (
		<form className="w-screen max-w-screen-sm mx-auto" onSubmit={handleSubmit}>
			<div className="flex justify-center">
				<h2 className="text-2xl md:text-3xl text-purple-800 font-bold leading-tight text-center
            md:text-left mb-5">
					Detect spam from your text
				</h2>
			</div>
			<div className="flex flex-wrap mb-6">
				<div className="relative w-full appearance-none label-floating">
					<textarea
						className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
						id="message"
						type="text"
						placeholder="Write/paste your text in here!"
						value={text}
						onChange={handleChange}
						style={{ resize: 'none' }}
					/>
				</div>
			</div>
			<div className="flex justify-center">
				<input
					className="bg-purple-800 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 self-center"
					type="submit"
					value="Submit"
				/>
			</div>
		</form>
	);
};

export default PredictForm;
