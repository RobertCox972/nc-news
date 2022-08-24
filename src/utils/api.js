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
