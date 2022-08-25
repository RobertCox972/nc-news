import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { postComment } from '../utils/api';
const CreateComment = () => {
	const [data, setData] = useState(null);
	const [post, setPost] = useState(false);
	const [error, setError] = useState(false);
	const { article_id } = useParams();
	const getData = (val) => {
		setData(val.target.value);
	};
	const handlePost = (event) => {
		setPost(true);
		postComment(article_id, data).catch(() => {
			setError(() => {
				return setError(true);
			});
		});
	};
	if (!error) {
		if (post) {
			return (
				<div className="articleList-item">
					<h3>Comment Added</h3>
				</div>
			);
		}
		return (
			<main>
				<form>
					<textarea
						onChange={getData}
						placeholder="Your comment goes here"
					></textarea>
					<button type="button" onClick={() => handlePost()}>
						Post Comment
					</button>
				</form>
			</main>
		);
	} else {
		return <h3>There has been an error adding your comment, sorry.</h3>;
	}
};
export default CreateComment;
