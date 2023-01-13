import React, { useEffect, useState } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { Monster } from "./utils/types";
import "./App.css";

function App() {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchField(e.target.value);
	};

	const filteredMonsters = monsters.filter((monster: Monster) =>
		monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
	);

	return (
		<div className="App">
			<h1>Monsters Rolodex</h1>
			<SearchBox onSearchChange={onSearchChange} />
			<CardList monsters={filteredMonsters} />
		</div>
	);
}

export default App;
