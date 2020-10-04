import React, { Component } from "react";
import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import NotFound404 from "./pages/not-found";
import TodoApp from "./pages/todo-app";
import CountriesApp from "./pages/countries-app";
import NavBar from "./components/Navbar/Navbar";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<NavBar />
					<Switch>
						<Route path="/todo-app" exact component={TodoApp} />
						<Route path="/countries-app" exact component={CountriesApp} />
						<Route path="/" exact component={Home} />
						<Route component={NotFound404} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
