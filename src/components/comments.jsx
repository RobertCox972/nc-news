import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchComments } from '../utils/api';
import { fetchArticle } from '../utils/api';
import Votes from './votes';

const ViewComments = () => {
	const { article_id } = useParams();
	const [availableComments, setAvailableComments] = useState([]);
	const [availableArticle, setAvailableArticle] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetchComments(article_id).then((response) => {
			setAvailableComments(response.data.comments);
			setIsLoading(false);
		});
	}, [article_id]);
	useEffect(() => {
		fetchArticle(article_id).then((response) => {
			setAvailableArticle(response.data.articles);
		});
	}, [article_id]);
	return isLoading ? (
		<h3>Loading Comments</h3>
	) : (
		<section className="body">
			<h3>{availableArticle.title}</h3>

			{availableComments < 1 ? (
				<h3>No articles to show</h3>
			) : (
				<div>
					<h4>{availableComments.length} comments</h4>
					<Link to={`/article/${article_id}/createcomment`}>Add a comment</Link>
				</div>
			)}
			{availableComments.map(({ body, comment_id, author, votes }) => {
				return (
					<div className="articleList-item" key={comment_id}>
						<div className="article">{body}</div>
						<div className="article-small">By: {author}</div>
						<Votes votes={votes} id={comment_id} type="comment" />
					</div>
				);
			})}
		</section>
	);
};
export default ViewComments;
