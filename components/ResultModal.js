import React from 'react';

const ResultModal = (props) => {
	return (
		<div
			className="fixed top-0 left-0 z-50 h-screen w-full flex flex-col items-center justify-center bg-teal-lightest font-sans"
			style={{ background: 'rgba(0, 0, 0, 0.3)' }}
		>
			<div className="h-screen w-full absolute flex items-center justify-center bg-modal">
				<div className="bg-white rounded shadow p-8 m-4 max-w-xs max-h-full text-center overflow-y-scroll">
					<div className="mb-4">
						<h1 className="text-xl">Your text was{props.type === 'SPAM' ? ' a' : ''}...</h1>
					</div>
					<div className="my-8">
						{props.type === 'SPAM' ? (
							<p className="text-4xl text-red-500">SPAM</p>
						) : (
							<p className="text-4xl text-green-500">NOT SPAM</p>
						)}
					</div>
					<div className="flex justify-center">
						<button
							className="bg-gray-800 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-600 self-center"
							onClick={props.reset}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResultModal;
