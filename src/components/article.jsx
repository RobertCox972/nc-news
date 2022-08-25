import { useState, useEffect } from 'react';
import Votes from './votes.jsx';
import { Link, useParams } from 'react-router-dom';
import { fetchArticle } from '../utils/api';

const Article = () => {
	const [availableArticle, setAvailableArticle] = useState([]);
	const [isLoading, setIsLoading] = useState([true]);
	const { article_id } = useParams();

	useEffect(() => {
		fetchArticle(article_id).then((response) => {
			setAvailableArticle(response.data.articles);
			setIsLoading(false);
		});
	}, [article_id]);
	const { title, comment_count, body, votes } = availableArticle;
	return isLoading ? (
		<h3>Loading Articles</h3>
	) : (
		<section className="body">
			<div className="articleList-item">
				<h3>{title}</h3>
				<div className="article">{body}</div>
				<Link to={`/article/${article_id}/comments`}>
					<div className="article">Comments({comment_count})</div>
				</Link>
				<div id="lower-article">
					<Votes votes={votes} id={article_id} type="article" />
				</div>
			</div>
		</section>
	);
};
export default Article;
