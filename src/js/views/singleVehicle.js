import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect( () => {
		actions.getSingleVehicles(params.uid)
	}, [params.uid])
	return (
		<div className="container">
			<div className="card mb-3 col-10 justify-content-center">
  				<div className="row g-0">
    				<div className="col-md-4">
      					<img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
    				</div>
    				<div className="col-md-8">
      					<div className="card-body">
        					<h1 className="card-title" style={{margin: "5px", borderBottom: "4px solid #800000"}}>{store.singleVehicle.name}</h1>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Model:`} <span className="text-dark">{`${store.singleVehicle.model}`}</span></p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Vehicles Class:`} <span className="text-dark">{`${store.singleVehicle.vehicle_class}`}</span>    </p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Manufacturer: `} <span className="text-dark">{`${store.singleVehicle.manufacturer}`}</span>    </p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Length: `} <span className="text-dark"> {`${store.singleVehicle.length}`}</span></p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Crew: `} <span className="text-dark">{`${store.singleVehicle.crew}`}</span></p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Passengers: `} <span className="text-dark">{`${store.singleVehicle.passengers}`}</span> </p>
							<p className="fs-4 text-danger" style={{margin: "20px"}}>{`Cargo Capacity: `} <span className="text-dark">{`${store.singleVehicle.cargo_capacity}`}</span> </p>
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

SingleVehicle.propTypes = {
	match: PropTypes.object
};
