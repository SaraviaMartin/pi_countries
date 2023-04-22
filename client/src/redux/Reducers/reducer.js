import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY,
    GET_COUNTRY_ID,
    RESET_DETAILS,
    RELOAD,
    SORT_BY_NAME,
    SORT_BY_POPULATION,

  } from "../Actions/actions";

  const initialState = {
    allCountries: [],
    countryById: {},
    countryActivities: [],
    countryActivities2: [],
    countryActivities3: [],
    activities: [],
  };

  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_COUNTRIES:
        return {
          ...state,
          allCountries: action.payload,
          
        };
      case GET_COUNTRY:
        return {
          ...state,
          countries: action.payload,
          countryActivities: action.payload,
        };
      case GET_COUNTRY_ID:
        return {
          ...state,
          countryById: action.payload,
        };
      case RESET_DETAILS:
        return {
          ...state,
          countryById: {},
        };
      case RELOAD:
        return {
          ...state,
          countryActivities: [],
        };
      case SORT_BY_NAME:
        const orderSort =
          action.payload === "asc"
            ? state.countries.sort((a, b) => a.name.localeCompare(b.name)) //localeCompare es un metodo de JS que compara elementos. Es muy usado para comparar alfabéticamente.
            : state.countries.sort((a, b) => b.name.localeCompare(a.name));
        return {
          ...state,
          countries: orderSort,
        };
      case SORT_BY_POPULATION:
        const populationSort =
          action.payload === "Low"
            ? state.countries.sort((a, b) => a.population - b.population)
            : state.countries.sort((a, b) => b.population - a.population);
        return {
          ...state,
          countries: populationSort,
        };
  
      default:
        return state;
  }
}

export default rootReducer;