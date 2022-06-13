import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect( () => {
		actions.getSinglePlanet(params.uid)
	}, [params.uid])
	return (
		<div className="container">
			<div className="card mb-3 col-10 justify-content-center">
  				<div className="row g-0">
    				<div className="col-md-4">
      					<img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
    				</div>
    				<div className="col-md-8">
      					<div className="card-body">
        					<h1 className="card-title" style={{margin: "5px", borderBottom: "4px solid #800000"}}>{store.singlePlanet.name}</h1>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Diameter:`} <span className="text-dark">{`${store.singlePlanet.diameter}`}</span></p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Rotation Period:`} <span className="text-dark">{`${store.singlePlanet.rotation_period}`}</span>    </p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Gravity: `} <span className="text-dark">{`${store.singlePlanet.gravity}`}</span>    </p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Population: `} <span className="text-dark"> {`${store.singlePlanet.population}`}</span></p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Climate: `} <span className="text-dark">{`${store.singlePlanet.climate}`}</span></p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Terrain: `} <span className="text-dark">{`${store.singlePlanet.terrain}`}</span> </p>
      					</div>
    				</div>
  				</div>
			</div>

			<Link to="/">
				<span className="btn btn-dark btn-lg text-danger" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};