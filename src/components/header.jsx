import Search from './search.jsx';

const header = () => {
	return (
		<div className="header">
			<a className="header" href="/">
				<img src="" alt="NC News logo" />
			</a>
			<div className="nav">
				<a className="header-link" href="/articles/">
					Articles
				</a>{' '}
				|
				<a className="header-link" href="/topics/">
					Topics
				</a>{' '}
				|
				<a className="header-link" href="/users/">
					Users
				</a>{' '}
				|
				<a className="header-link" href="/user/">
					Username
				</a>
			</div>

			<Search />
		</div>
	);
};
export default header;
