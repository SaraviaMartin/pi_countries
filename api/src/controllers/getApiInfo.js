const axios = require("axios");
const { Countries, Activity } = require("../db.js");

//traer la info de la API (de forma asíncrona)
const getApiInfo = async () => {
    try {
      const url = "https://restcountries.com/v3.1/all";
      const response = await axios.get(url);
  
      const countriesMapeo = response.data.map((country) => {
        return {
          id: country.cca3,
          name: country.name.common,
          flag: country.flag[1],
          continent: country.region,
          capital: country.capital ? country.capital : "Capital no encontrada",
          subregion: country.subregion,
          population: country.population,
        };
      });
  
      await Countries.bulkCreate(countriesMapeo);
    } catch (error) {
      console.log(error + " <======= ES EN EL LLAMADO A LA API");
    }
  };
  
  module.exports = {
    getApiInfo,
  };