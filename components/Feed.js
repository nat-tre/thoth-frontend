import React from 'react';

import TwitterCard from './TwitterCard';
import PlaceholderCard from './PlaceholderCard';

const Feed = (props) => {
	let tweets = (
		<div className="w-auto lg:w-5/6 mx-auto lg:mr-0" style={{ height: '500px' }}>
			<PlaceholderCard />
			{props.tweets.map((tweet) => {
				return (
					<TwitterCard
						tweetId={tweet.id_str}
						displayName={tweet.user.name}
						username={tweet.user.screen_name}
						image={tweet.user.profile_image_url}
						text={tweet.full_text}
						date={tweet.created_at}
						label={tweet.label}
						key={tweet.id}
					/>
				);
			})}
		</div>
	);

	return (
		<div>
			<div className="mt-20 sm:mt-0 leading-normal tracking-normal text-gray-900">
				<div className="h-screen bg-right bg-cover">
					<div className="container px-6 mx-auto flex flex-wrap md:flex-row h-screen items-center">
						<div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
							<h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center
            md:text-left slide-in-bottom-h1">
								COVID-19 Spam Tweet Detector
							</h1>
							<p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
								Use our tool to help you detect spam tweet/text under #covid19 today!
							</p>
							<a
								className="bg-purple-800 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 sm:mr-6 fade-in"
								href="#predict"
							>
								<p>Try it out</p>
							</a>
						</div>

						<div className="w-full xl:w-3/5 mt-6 md:mt-0 overflow-y-scroll">{tweets}</div>
					</div>
				</div>
				<div className="invisible sm:visible border-b-4 mx-auto w-80" />
			</div>
		</div>
	);
};

export default Feed;
