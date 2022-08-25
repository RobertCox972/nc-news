import { patchVotes } from '../utils/api';
import { useState } from 'react';
import voteUpImage from '../images/voteUpArrow.png';
import voteDownImage from '../images/voteDownArrow.png';

const Votes = ({ votes, article_id }) => {
	const [voteIncrement, setVoteIncrement] = useState(0);

	const incrementVotes = (increment) => {
		setVoteIncrement((currVoteIncrement) => {
			return currVoteIncrement + increment;
		});
		patchVotes(article_id).catch(() => {
			setVoteIncrement((currVoteIncrement) => {
				return currVoteIncrement - increment;
			});
		});
	};
	if (voteIncrement === 0) {
		return (
			<div className="article-small">
				{votes + voteIncrement}
				<img
					src={voteUpImage}
					className="voteImage"
					alt="vote up"
					onClick={() => incrementVotes(+1)}
				/>
				<img
					src={voteDownImage}
					className="voteImage"
					alt="vote down"
					onClick={() => incrementVotes(-1)}
				/>
			</div>
		);
	} else {
		return <div className="article-small">Votes: {votes + voteIncrement}</div>;
	}
};

export default Votes;
