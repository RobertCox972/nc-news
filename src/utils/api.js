import axios from 'axios';

export function fetchArticle(article_id) {
	return axios.get(
		`https://r-cox-be-nc-news.herokuapp.com/api/articles/${article_id}`
	);
}

export function fetchArticleByTopic(topic) {
	return axios.get('https://r-cox-be-nc-news.herokuapp.com/api/articles', {
		params: { topic },
	});
}

export function fetchTopics() {
	return axios.get('https://r-cox-be-nc-news.herokuapp.com/api/topics');
}
export function patchVotes(article_id, increment) {
	return axios.patch(
		`https://r-cox-be-nc-news.herokuapp.com/api/articles/${article_id}`,

		{ inc_votes: increment }
	);
}
export function fetchComments(article_id) {
	return axios.get(
		`https://r-cox-be-nc-news.herokuapp.com/api/articles/${article_id}/comments`
	);
}
export function postComment(article_id, textBody) {
	console.log(textBody);
	return axios.post(
		`https://r-cox-be-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
		{ username: 'tickle122', body: textBody }
	);
}
