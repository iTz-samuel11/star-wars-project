import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3" style={{borderTop: "1px solid gray", borderBottom: "1px solid gray", margin: "18px"}}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1" style={{marginLeft: "5%"}}>BROWSE DATABANK //</span>
			</Link>
			<div className="me-4">
				<Link to="/demo">
					<button className="btn btn-primary">favorites<i className="fa-solid fa-caret-down"></i></button>
				</Link>
			</div>
		</nav>
	);
};
