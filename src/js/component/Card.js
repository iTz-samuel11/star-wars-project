import PropTypes from "prop-types";
import React from "react";

export const Card = ({item}) => {
    return(
        <div>
            <div className="d-flex" >
                <div className="card" style={{width: "18rem", margin : "4px"}}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div>
                            <a href="#" className="btn btn-dark text-danger" style={{marginRight: "43%"}}>learn more</a>
                            <button className="btn btn-warning"><i className="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="d-flex">
                <div className="card" style={{width: "18rem", margin : "4px"}}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div>
                            <a href="#" className="btn btn-dark text-danger" style={{marginRight: "43%"}}>learn more</a>
                            <button className="btn btn-warning"><i className="fa-solid fa-heart"></i></button>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <div className="card" style={{width: "18rem", margin : "4px"}}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div>
                            <a href="#" className="btn btn-dark text-danger" style={{marginRight: "43%"}}>learn more</a>
                            <button className="btn btn-warning"><i className="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

Card.propTypes = {
    item: PropTypes.object
}