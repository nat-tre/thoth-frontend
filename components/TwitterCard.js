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
			className="w-full mx-auto rounded-lg shadow p-5 text-gray-800 cursor-pointer"
			style={{
				maxWidth: '100%',
				minHeight: '196px',
				backgroundColor: props.label === 'SPAM' ? '#FECACA' : '#FFFF'
			}}
			// key={props.index}
		>
			<div className="w-full flex mb-4">
				<div className="overflow-hidden rounded-full w-12 h-12">
					<img src={props.image} alt="" />
				</div>
				<div className="flex-grow pl-3">
					<h6 className="font-bold text-md">{props.displayName}</h6>
					<p className="text-xs text-gray-600">@{props.username}</p>
				</div>
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
