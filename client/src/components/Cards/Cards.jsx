import React from "react"
import Card from "../Card/Card"
import "./cards.styles.css"
import { useDispatch, useSelector } from "react-redux"

function Cards({allCountries}){
//    const countriesList = allCountries 
    return(
        <div className="cards-list">

            {!Array.isArray(allCountries)
            ? allCountries
            : allCountries.map((country) => {
                return(
                    <Card
                        id = {country.id}
                        flag = {country.flag}
                        name= {country.name}
                        continent={country.continent}
                        population={country.population}
                        key={country.id}
                    />
                )
            })
            }
        </div>
        // <div className="cards-list">
            
        //     {countriesList?.map(country =>
        //         <Card/>)}
        // </div>
    )
}

export default Cards;