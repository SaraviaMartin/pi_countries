import React from "react";
import "./detail.styles.css";
import { useState, useSelector } from "react";
import Navbar from "../Navbar/Navbar";
import { getCountryById, reSetCountryDetails } from "../../redux/actions";

export default function Detail(props){
    const myCountry = useSelector((state) => state.countryById);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountryById(props.match.params.id));
      }, [dispatch, props.match.params.id]);
    
      useEffect(() => {
        return () => {
          dispatch(reSetCountryDetails());
        };
      }, [dispatch]);

    return(
        <section id={styles.showcase}>
      <div>
        <Navbar />
      </div>
      <div className={styles.card_details_wrapper}>
        <img
          className={styles.card_details_img}
          src={myCountry.flag}
          alt="Flag noyt found"
          width="300px"
          height="200px"
        ></img>
        {myCountry ? (
          <div >
            <div >
              Country: {myCountry.name}
            </div>
            <p >Country ID: {myCountry.id}</p>
            <p >
              Continent: {myCountry.continent}
            </p>
            <p >
              Region: {myCountry.subregion}
            </p>
            <p >
              Capital: {myCountry.capital}
            </p>
            <p >Area km2: {myCountry.area}</p>
            <p >
              Population: {myCountry.population}
            </p>
            <div > Tourist Activities: </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
    )
};

