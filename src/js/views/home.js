import React, {useContext} from "react";
import "../../styles/home.css";
import { Card } from "../component/Card.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);
	return (
		<div className="container">
			<div className="d-flex flex-wrap w-100">
				{store.characters.map(
					(characters, index) => {
						return(
							<Card key={characters.id} item={characters} />
						)
					}
				)}
			</div>
		</div>
	)
};
