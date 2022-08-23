import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
const axios = require('axios');

const ArticlesList = () => {
	const [availableArticles, setAvailableArticles] = useState([]);
	const { topic } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		axios

			.get('https://r-cox-be-nc-news.herokuapp.com/api/articles', {
				params: { topic },
			})
			.then((response) => {
				setAvailableArticles(response.data.articles);
				setIsLoading(false);
			});
	}, [topic]);
	return isLoading ? (
		<h3>Loading Articles</h3>
	) : (
		<section className="body">
			{topic ? <h3>Articles: {topic}</h3> : <h3>All Articles</h3>}
			{availableArticles < 1 ? (
				<h3>No articles to show</h3>
			) : (
				<h3>{availableArticles.length} items found</h3>
			)}
			{availableArticles.map(({ article_id, title, topic, body }) => {
				return (
					<Link to={`/articles/${article_id}`} key={article_id}>
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
