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
	return (
		<section className="body">
			<h1>Available Topics</h1>
			{setAvailableTopics.map(({ slug, description }) => {
				return (
					<Link to={`/articles/${slug}`} key={slug}>
						<div className="articleList-item">{slug}</div>
					</Link>
				);
			})}
		</section>
	);
};

export default Topics;
