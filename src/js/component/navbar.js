import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3" style={{borderTop: "1px solid gray", borderBottom: "1px solid gray", margin: "18px"}}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1" style={{marginLeft: "5%"}}>BROWSE DATABANK //</span>
			</Link>
			<div className="me-4">
				<div className="dropdown">
  					<a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    					{"Favorites"}
  					</a>
 					<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    					<li><a className="dropdown-item" href="#">Action</a></li>
    					<li><a className="dropdown-item" href="#">Another action</a></li>
    					<li><a className="dropdown-item" href="#">Something else here</a></li>
  					</ul>
				</div>
			</div>
		</nav>
	);
};
