const axios = require("axios");
const { Country, Activity } = require("../db.js");

//traer la info de la API (de forma asíncrona)
const getApiInfo = async () => {
    try {
      const url = "https://restcountries.com/v3.1/all";
      const response = await axios.get(url);
  
      const countriesMapeo = response.data.map((el) => {
        return {
          id: el.cca3,
          name: el.name.common,
          flag: el.flags[1],
          continent: el.region,
          capital: el.capital ? el.capital : "Capital no encontrada",
          subregion: el.subregion,
          population: el.population,
        };
      });
  
      await Country.bulkCreate(countriesMapeo);
    } catch (error) {
      console.log(error + " <======= ES EN EL LLAMADO A LA API");
    }
  };
  
  module.exports = {
    getApiInfo,
  };