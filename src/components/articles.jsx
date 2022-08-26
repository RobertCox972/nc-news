import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchArticleByTopic, fetchTopics } from '../utils/api';

const ArticlesList = () => {
	const [availableArticles, setAvailableArticles] = useState([]);
	const [AvailableTopics, setAvailableTopics] = useState([]);
	const { topic } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetchArticleByTopic(topic).then((response) => {
			setAvailableArticles(response.data.articles);
			setIsLoading(false);
		});
		fetchTopics().then((response) => {
			setAvailableTopics(response.data.topics);
		});
	}, [topic]);

	const initialValues = {
		sort_by: 'created_at',
		order: 'desc',
		topic: '',
	};
	const [values, setValues] = useState(initialValues);

	const GetData = (val) => {
		const { name, value } = val.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	const handlePost = (event) => {
		setIsLoading(true);
		fetchArticleByTopic(values.topic, values.sort_by, values.order).then(
			(response) => {
				setAvailableArticles(response.data.articles);
				setIsLoading(false);
			}
		);
	};

	return isLoading ? (
		<h3>Loading Articles</h3>
	) : (
		<section className="body">
			{topic ? <h3>Articles: {topic}</h3> : <h3>All Articles</h3>}

			<form>
				Sort by:
				<select
					name="sort_by"
					default={values.sort_by}
					value={values.sort_by}
					onChange={GetData}
				>
					<option value="article_id">Article_id</option>
					<option value="author">Author</option>
					<option value="title">Title</option>
					<option value="body">Body</option>
					<option value="topic">Topic</option>
					<option value="created_at">Created_at</option>
					<option value="votes">Votes</option>
				</select>
				<select name="order" value={values.order} onChange={GetData}>
					<option value="asc">Ascending</option>
					<option value="desc">Descending</option>
				</select>
				<select name="topic" value={values.topic} onChange={GetData}>
					<option value={topic || ''}>{topic || 'All'}</option>
					{AvailableTopics.map(({ slug, description }) => {
						return (
							<option value={slug} key={slug}>
								{slug}
							</option>
						);
					})}
				</select>
				<button type="button" onClick={() => handlePost()}>
					Sort
				</button>
			</form>
			{availableArticles < 1 ? (
				<h3>No articles to show</h3>
			) : (
				<h3>{availableArticles.length} items found</h3>
			)}
			{availableArticles.map(({ article_id, title, topic, body, author }) => {
				return (
					<Link to={`/article/${article_id}`} key={article_id}>
						<div className="articleList-item">
							{title}
							<div className="articleListBody">{body}</div>
							<div className="articleListBody">{author}</div>
						</div>
					</Link>
				);
			})}
		</section>
	);
};

export default ArticlesList;
