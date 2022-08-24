import React, {useContext} from "react";
import {Context} from "../store/appContext";
import { Card } from "../component/Card";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext (Context);
	return (
	<div className="container">
		<div className="container m-2">
			<p className="fs-1 text-danger p-2"><strong>{"Characters"}</strong></p>
			<div className="d-flex flex-nowrap scroll">
				{store.people.map((item, index) => {
					return (
						<Card key={item.uid}
							item={item}
							resource="people"/>
					);
					}
				)}
			</div>
		</div>
		<div className="container m-2">
			<p className="fs-1 text-danger p-2"><strong>{"Planets"}</strong></p>
			<div className="d-flex flex-nowrap scroll">
				{store.planets.map(
				(item, index) => {
						return (
							<Card key={item.uid}
								item={item} 
								resource="planets"
							/>
						)
					}
				)};
			</div>
		</div>
		<div className="container m-2">
			<p className="fs-1 text-danger p-2"><strong>{"Vehicles"}</strong></p>
			<div className="d-flex flex-nowrap scroll">
				{store.vehicles.map((item, index) => {
					return (
					<Card key={item.uid}
						item={item} 
						resource="vehicles"/>
					);
					}
				)}
			</div>
		</div>
	</div>			
);
}
