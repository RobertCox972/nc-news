import Header from './components/header';
import Articles from './components/articles';
import Topics from './components/topics';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<Header />
					<Routes>
						<Route path="/" element={<Articles />} />
						<Route path="/topics" element={<Topics />} />
					</Routes>
				</header>
			</div>
		</BrowserRouter>
	);
}

export default App;
