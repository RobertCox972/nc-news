import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTopics } from '../utils/api';

const Topics = () => {
	const [AvailableTopics, setAvailableTopics] = useState([]);

	useEffect(() => {
		fetchTopics().then((response) => {
			setAvailableTopics(response.data.topics);
		});
	}, []);
	return (
		<section className="body">
			<h1>Available Topics</h1>
			{AvailableTopics.map(({ slug, description }) => {
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
