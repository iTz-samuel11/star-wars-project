import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Vehicles = ({item}) => {
    return(
        <div className="d-flex" >
            <div className="card" style={{width: "18rem", margin : "4px"}}>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="loading..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div>
                        <Link href="#" className="btn btn-dark text-danger" style={{marginRight: "43%"}} to={`/singleVehicles/vehicles/${item.uid}`}>learn more</Link>
                        <button className="btn btn-warning"><i className="fa-solid fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>);
}

Vehicles.propTypes = {
    item: PropTypes.object
}