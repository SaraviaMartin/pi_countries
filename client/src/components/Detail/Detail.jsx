import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { getCountryById, reSetCountryDetails } from "../../redux/Actions/actions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Detail (props){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(reSetCountryDetails())
        dispatch(getCountryById(props.match.params.id))
    }, [dispatch, props.match.params.id])

    const countriesDetail = useSelector((state)=> state.detail)

    return(
        <div key={countriesDetail.id} >
        <div>
          <Navbar />
        </div>
  
        <div >{
          countriesDetail.length ?
            <div >
              <div >
                <img  src={countriesDetail[0].flag} alt={countriesDetail[0].name} width='250px' height='175px' />  
              </div>
              <div >
                <h1 >{countriesDetail[0].name}</h1>
                <div >
                  <h2>ID: {countriesDetail[0].id}</h2>
                  <h2>Capital: {countriesDetail[0].capital}</h2>
                  <h2>Continent: {countriesDetail[0].continent}</h2>
                  <h2>Subregion: {countriesDetail[0].subregion}</h2>
                  <h2>Area: {countriesDetail[0].area} km2</h2>
                  <h2>Population: {countriesDetail[0].population}</h2>
                </div>
              </div>       
  
              <div >  {countriesDetail[0].activities?.map(el => {
                return (
                  <div>
                    <Link  to='/activities'>
                      <h1>Activity</h1>
                    </Link>
                    <div>
                      <h3>{el.name}</h3>
                      <h3>Difficulty: {el.difficulty}</h3>
                      <h3>Duration: {el.duration}</h3>
                      <h3>Season: {el.season}</h3>
                    </div>
                  </div>
                )
              })}
              </div>
  
            </div> : <div className='loading'>
              <h1> Loading... </h1>
            </div>
  
        }</div>
      </div>
    );

}