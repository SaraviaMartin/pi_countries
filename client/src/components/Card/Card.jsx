import React from "react";
import "./card.styles.css"
import {Link} from "react-router-dom";

function Card({ continent, flag, name,  population, id }){
    return(
        <div className="card-container">
            <Link to={"/home/" + id}></Link>
            <img src={flag} alt="Not Found" />
            <p>Pais:{name} </p>
            <p>Continente:{continent} </p>
            <p>Poblacion:{population} </p>
        </div>
    )
}

export default Card;