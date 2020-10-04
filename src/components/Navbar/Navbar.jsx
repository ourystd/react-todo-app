import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<NavLink to="/" className="navbar-brand" style={{ padding: 10 }}>
					React Projects
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink exact={true} to="/" className="nav-link">
								All
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/todo-app" className="nav-link">
								Todo App
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/countries-app" className="nav-link">
								Countries App
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
