import { patchVotes } from '../utils/api';
import { useState } from 'react';
import voteUpImage from '../images/voteUpArrow.png';
import voteDownImage from '../images/voteDownArrow.png';

const Votes = ({ votes, article_id }) => {
	const [voteIncrement, setVoteIncrement] = useState(0);

	const incrementVotesUp = () => {
		setVoteIncrement((currVoteIncrement) => {
			return currVoteIncrement + 1;
		});
		patchVotes(article_id).catch(() => {
			setVoteIncrement((currVoteIncrement) => {
				return currVoteIncrement - 1;
			});
		});
	};
	const incrementVotesDown = () => {
		setVoteIncrement((currVoteIncrement) => {
			return currVoteIncrement - 1;
		});
		patchVotes(article_id).catch(() => {
			setVoteIncrement((currVoteIncrement) => {
				return currVoteIncrement + 1;
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
					onClick={incrementVotesUp}
				/>
				<img
					src={voteDownImage}
					className="voteImage"
					alt="vote down"
					onClick={incrementVotesDown}
				/>
			</div>
		);
	} else {
		return <div className="article-small">Votes: {votes + voteIncrement}</div>;
	}
};

export default Votes;
