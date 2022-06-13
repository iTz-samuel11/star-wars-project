import React, {useContext} from "react";
import "../../styles/home.css";
import { Peoples } from "../component/Peoples.js";
import { Planets } from "../component/Planets.js";
import { Vehicles } from "../component/Vehicles.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);
	return (
		<div className="container">
			<div className="d-flex  w-100 scroll flex-nowrap">
				{store.characters.map(
					(characters, index) => {
						return(
							<div>
								<Peoples key={characters.id} item={characters} />
							</div>
						)
					}
				)}
			</div>
			<div className="d-flex  w-100 scroll flex-nowrap">
				{store.planets.map(
					(planets, index) => {
						return(
							<div>
								<Planets key={planets.id} item={planets} />
							</div>
						)
					}
				)}
			</div>
			<div className="d-flex  w-100 scroll flex-nowrap">
				{store.vehicles.map(
					(vehicles, index) => {
						return(
							<div>
								<Vehicles key={vehicles.id} item={vehicles} />
							</div>
						)
					}
				)}
			</div>
		</div>
	)
};
