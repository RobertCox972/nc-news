import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');

const Topics = () => {
	const [setAvailableTopics, setAvailableTopicssetAvailableTopics] = useState(
		[]
	);

	useEffect(() => {
		axios
			.get('https://r-cox-be-nc-news.herokuapp.com/api/topics')
			.then((response) => {
				setAvailableTopicssetAvailableTopics(response.data.topics);
			});
	}, []);
	console.log(setAvailableTopics);
	return (
		<section className="body">
			{setAvailableTopics.map(({ slug, description }) => {
				return <h1>{slug}</h1>;
			})}
		</section>
	);
};

export default Topics;
