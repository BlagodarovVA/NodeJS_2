import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [person, setPerson] = useState();

	useEffect(() => {
		fetch('http://127.0.0.1:5001')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPerson(data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="App">
			{person && (
				<>
					<h1>{person.name}</h1>
					<h2>{person.isProgrammer ? 'Programmer' : 'Student'}</h2>
				</>
			)}
		</div>
	);
}

export default App;
