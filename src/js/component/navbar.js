import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div className="container">
				<Link to="/" onClick={(e) => {
					actions.removeSingleItem()
				}}>
					<p className="fs-2 text-danger"><strong>{"Star Wars"}</strong></p> 
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-danger dropdown-toggle d-flex dd-items" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							<p className="m-0 me-1">{"Favorites"}</p> 
							<div className="circulo me-1">{store.favorites.length}</div>
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{store.favorites.map((item, index) => {
								return (
									<div key={index} className="d-flex trasH dd-items key={index}">
										<Link className="dropdown-item" to={`/single/${item.resource}/${item.uid}`}>{item.name}</Link >
										<span className="ms-1 me-1"><i className="fa-solid fa-trash-can" onClick={(e) => {
											actions.deleteFavorites(item)
										}}></i></span>
									</div>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};