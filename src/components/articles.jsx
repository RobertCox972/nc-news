import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');

const ArticlesList = () => {
	const [availableArticles, setAvailableArticles] = useState([]);

	useEffect(() => {
		axios
			.get('https://r-cox-be-nc-news.herokuapp.com/api/articles')
			.then((response) => {
				setAvailableArticles(response.data.articles);
			});
	}, []);
	return (
		<section className="body">
			{availableArticles.map(({ article_id, title, topic, body }) => {
				return (
					<Link to="/topics/articles/{article_id}">
						<div className="articleList-item">
							{title}
							<div className="articleBody">{body}</div>
						</div>
					</Link>
				);
			})}
		</section>
	);
};

export default ArticlesList;
