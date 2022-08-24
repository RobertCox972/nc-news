import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchArticleByTopic } from '../utils/api';

const ArticlesList = () => {
	const [availableArticles, setAvailableArticles] = useState([]);
	const { topic } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetchArticleByTopic(topic).then((response) => {
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
					<Link to={`/article/${article_id}`} key={article_id}>
						<div className="articleList-item">
							{title}
							<div className="articleListBody">{body}</div>
						</div>
					</Link>
				);
			})}
		</section>
	);
};

export default ArticlesList;
