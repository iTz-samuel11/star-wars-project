import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
    
	useEffect(()=> {
		actions.getSingleItem(params.resource, params.uid)
	}, [params.resource, params.uid])

	return (
	<div className="container">
		<div className="row justify-content-center align middle">
			<div className="col-6 d-flex justify-content-center align-middle">	
			    <img src={`https://starwars-visualguide.com/assets/img/${params.resource === "people" 
					? "characters"
					: params.resource}/${store.singleItem.uid}.jpg`}/>
		    </div>		
		    <div className="col-6 d-flex flex-column justify-content-start align-middle text-warning">
				<h2>{store.singleItem.name}</h2>
				<p>{store.singleItem.description}</p>
			    <div className="row container mt-4 flex-column">
				    <div className="col-2 fs-4 d-flex justify-content-between w-100">
					    <p>{"Name:"}</p>
					    <p>{store.singleItem.name}</p>
			        </div>
                    <div className="col-2 fs-4 d-flex justify-content-between w-100">
                        {params.resource === "people" && <p>{"Birth Year:"}</p>}
                        {params.resource === "people" && <p>{store.singleItem.birth_year}</p>}
                        {params.resource === "planets" && <p>{"Climate:"}</p>}
                        {params.resource === "planets" && <p>{store.singleItem.climate}</p>}
                        {params.resource === "vehicles" && <p>{"Model:"}</p>}
                        {params.resource === "vehicles" && <p>{store.singleItem.model}</p>}
                    </div>
                    <div className="col-2 fs-4 d-flex justify-content-between w-100">
                        {params.resource === "people" && <p>{"Gender:"}</p>}
                        {params.resource === "people" && <p>{store.singleItem.gender}</p>}
                        {params.resource === "planets" && <p>{"Population:"}</p>}
                        {params.resource === "planets" && <p>{store.singleItem.population}</p>}
                        {params.resource === "vehicles" && <p>{"Length:"}</p>}
                        {params.resource === "vehicles" && <p>{store.singleItem.length}</p>}
                    </div>
                    <div className="col-2 fs-4 d-flex justify-content-between w-100">
                        {params.resource === "people" && <p>{"Height:"}</p>}
                        {params.resource === "people" && <p>{store.singleItem.height}</p>}
                        {params.resource === "planets" && <p>{"Orbital Period:"}</p>}
                        {params.resource === "planets" && <p>{store.singleItem.orbital_period}</p>}
                        {params.resource === "vehicles" && <p>{"Crew:"}</p>}
                        {params.resource === "vehicles" && <p>{store.singleItem.crew}</p>}
                    </div>
                    <div className="col-2 fs-4 d-flex justify-content-between w-100">
                        {params.resource === "people" && <p>{"Skin Color:"}</p>}
                        {params.resource === "people" && <p>{store.singleItem.skin_color}</p>}
                        {params.resource === "planets" && <p>{"Rotation Period:"}</p>}
                        {params.resource === "planets" && <p>{store.singleItem.rotation_period}</p>}
                        {params.resource === "vehicles" && <p>{"Passengers:"}</p>}
                        {params.resource === "vehicles" && <p>{store.singleItem.passengers}</p>}
                    </div>
                    <div className="col-2 fs-4 d-flex justify-content-between w-100">
                        {params.resource === "people" && <p>{"Eye Color:"}</p>}
                        {params.resource === "people" && <p>{store.singleItem.eye_color}</p>}
                        {params.resource === "planets" && <p>{"Diameter:"}</p>}
                        {params.resource === "planets" && <p>{store.singleItem.diameter}</p>}
                        {params.resource === "vehicles" && <p>{"Consumables:"}</p>}
                        {params.resource === "vehciles" && <p>{store.singleItem.consumables}</p>}
                    </div>	
			    </div>
		    </div>
	    </div>
	</div>
	)
};

Single.propTypes = {
	match: PropTypes.object
};
