import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h1 className="text-center py-2">Home Page</h1>

			<p>Projects :</p>

			<ul>
				<li>
					<Link to="/todo-app">Todo App</Link>
				</li>
				<li>
					<Link to="/countries-app">Countries List App</Link>
				</li>
			</ul>
		</div>
	);
}
