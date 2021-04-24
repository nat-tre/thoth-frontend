import React from 'react';
import TextTruncate from 'react-text-truncate';
import moment from 'moment';

const TwitterCard = (props) => {
	const tweetDate = moment(props.date).format('MMMM Do, h:mm a');

	const handleClickedLink = (id) => {
		window.open('https://twitter.com/i/web/status/' + id);
	};

	return (
		<div
			onClick={() => handleClickedLink(props.tweetId)}
			className="w-full mx-auto mb-4 rounded-lg border-4 shadow-md p-5 text-gray-800 cursor-pointer"
			style={{
				maxWidth: '100%',
				minHeight: '196px',
				borderColor: props.label === 'SPAM' ? '#FECACA' : 'rgba(17, 24, 39,0.2)'
			}}
		>
			<div className="w-full flex mb-4">
				<div className="overflow-hidden rounded-full w-12 h-12">
					<img src={props.image} alt="" />
				</div>
				<div className="flex-grow pl-3">
					<h6 className="font-bold text-md">{props.displayName}</h6>
					<p className="text-xs text-gray-600">@{props.username}</p>
				</div>
				{props.label === 'SPAM' ? (
					<div className="text-right font-bold text-lg text-red-500">
						<svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5 pt-1" viewBox="0 0 24 24">
							<path d="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
						</svg>
					</div>
				) : null}
			</div>
			<div className="w-full mb-4">
				<p className="text-sm">
					<TextTruncate line={6} element="span" truncateText="…" text={props.text} />
				</p>
			</div>
			<div className="w-full">
				<p className="text-xs text-gray-500 text-right">{tweetDate}</p>
			</div>
		</div>
	);
};

export default TwitterCard;
