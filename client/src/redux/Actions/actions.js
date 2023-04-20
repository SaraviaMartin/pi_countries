import axios from "axios"

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_POPULATION = "SORT_BY_POPULATION";
export const RELOAD = "RELOAD";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";
export const RESET_DETAILS = "RESET_DETAILS" ;

export default function getAllCountries() {
  return async (dispatch) => {
    return axios("http://localhost:3001/countries").then((res) => {
      dispatch({
        type: GET_ALL_COUNTRIES,
        payload:res.data,
      })
;    })
  }
  // return async function (dispatch){
  //   try {
  //     var json = await axios.get("http://localhost:3001/countries");
  //     return dispatch({
  //       type: GET_ALL_COUNTRIES,
  //       payload: json.data, // action.payload es la informacion que devuelvo aca
  //     });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };
}
  
  export const getCountry = (name) => {
    return async (dispatch) => {
      return axios(`http://localhost:3001/countries?name=${name}`).then((res) =>
        dispatch({ type: GET_COUNTRY, payload: res.data })
      );
    };
  };
  
  export function getCountryById(id) {
    return async (dispatch) => {
      try {
        var res = await axios(`http://localhost:3001/countries/${id}`);
        return dispatch({ type: GET_COUNTRY_ID, payload: res.data });
      } catch (error) {
        console.log(error);
      }
    };
  }
  export function reSetCountryDetails() {
    return {
      type: RESET_DETAILS,
    };
  }
  
  export function reSetCountryActivities() {
    return {
      type: RELOAD,
    };
  }
  
  export const sortCountryByName = (payload) => {
    return {
      type: SORT_BY_NAME,
      payload,
    };
  };
  
  export function sortByPopulation(payload) {
    return {
      type: SORT_BY_POPULATION,
      payload,
    };
  }