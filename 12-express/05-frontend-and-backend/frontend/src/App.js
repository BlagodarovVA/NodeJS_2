import { useEffect } from 'react';
import './App.css';

function App() {
	useEffect(() => {
		fetch('http://127.0.0.1:5001')
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	}, []);
	return <div className="App"></div>;
}

export default App;
