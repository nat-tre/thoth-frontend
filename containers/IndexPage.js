import { useState, useEffect } from 'react';
import axios from '../axios';
import 'tailwindcss/tailwind.css';

import useInterval from '../hooks/useInterval';

import Feed from '../components/Feed';
import Navbar from '../components/Navbar';
import LoadIndicator from '../components/LoadIndicator';
import Section from '../components/Section';
import Predict from '../components/Predict';
import ResultModal from '../components/ResultModal';

//TODO maybe additional styling + animation

const IndexPage = () => {
	const [ loading, setLoading ] = useState(false);
	const [ type, setType ] = useState(null);
	const [ data, setData ] = useState([]);
	const [ isInit, setIsInit ] = useState(false);

	useEffect(() => {
		axios
			.get('/feed?amount=10')
			.then((res) => {
				setData(res.data.feed);
				setIsInit(true);
			})
			.catch((err) => {
				console.log(err);
				setIsInit(true);
			});
	}, []);

	useInterval(() => {
		if (isInit) {
			axios
			.get('/feed?amount=1')
			.then((res) => {
				addTweet(res.data.feed[0])
			})
			.catch((err) => {
				console.log(err);
			});
			console.log(data, data.length);
		}
	}, 15000);

	const addTweet = (tweet) => {
		if (data.length >= 50) {
			setData((prevData) => [ tweet, ...prevData.slice(0, -1) ]);
		} else {
			setData((prevData) => [ tweet, ...prevData ]);
		}
	};

	const handlePredict = (text) => {
		if (!loading) {
			const data = { text: text };
			setLoading(true);
			setType(null);
			axios
				.post('/predict', data)
				.then((res) => {
					setType(res.data.class_label);
					console.log(type);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
				});
		}
	};

	const resetPredictResult = () => {
		console.log(type);
		setType(null);
	};

	const content = isInit ? (
		<div>
			{type ? <ResultModal reset={resetPredictResult} type={type} /> : null}
			<Navbar />
			<Section>
				<Feed predict={handlePredict} tweets={data} />
			</Section>
			<Section>
				<Predict predict={handlePredict} />
			</Section>
		</div>
	) : null;

	return (
		<div>
			{loading || !isInit ? <LoadIndicator /> : null}
			{content}
		</div>
	);
};

export default IndexPage;
