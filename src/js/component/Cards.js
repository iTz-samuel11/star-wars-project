import React from "react";
import PropTypes from "prop-types";

export const Cards = ({item, ...props}) => {
    return(
        <div>
            <div className="d-flex" >
                <div className="card" style={{width: "18rem", margin : "4px"}}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="loading..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <Link >
                            <a href="#" className="btn btn-dark text-danger" style={{marginRight: "43%"}} >learn more</a>
                            <button className="btn btn-warning"><i className="fa-solid fa-heart"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    item: PropTypes.object,
    resource: PropTypes.string
}