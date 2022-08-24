import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Card =({item, ...props}) => {
    const [isFavorite, setisFavorite] = useState(false)
    const {store, actions} = useContext(Context)
    useEffect(() =>{
        if (!store.favorites.find(favorite => item.name == favorite.name)) {
            setisFavorite(false)
        }
    },[store.favorites]) 
    return (
        <div className="card unic m-2 border-dark border-3" style={{minWidth: "250px"}}>
            <img src={`https://starwars-visualguide.com/assets/img/${props.resource === "people" 
            ? "characters"      
            : props.resource}/${item.uid}.jpg`} className="card-img-top" alt="loading..."/>
            <div className="card-body pb-2">
                <h5 className="card-title">{item.name}</h5>
                <div className="container-fluid justify-content-between p-0 d-flex">
                    <Link type="button" className="btn btn-dark text-danger btn-sm" to={`/single/${props.resource}/${item.uid}`}>{"Learn more"}</Link>
                    <buttom type="button" className={`btn btn-${isFavorite
                    ? ""
                    : "outline-"}warning btn-sm ${props.key}`} onClick={(e)=>{
                    actions.addFavorites({...item, resource: props.resource})
                    setisFavorite (true) 
                    }}><i className="fa-solid fa-heart"></i></buttom>
                </div>   
            </div>
        </div> 
    );
};