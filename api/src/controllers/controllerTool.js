const { Op } = require("sequelize");
const { Countries, Activity } = require("../db.js");

//llamado a todos los países
const getCountries = async () => {
    try {
      const countries = await Countries.findAll({
        attributes: ["id", "name", "flag", "continent", "population"],
      });
      return countries;
    } catch (error) {
      console.log(error);
    }
  };
  
  //paises por nombre
  const getCountriesByName = async (name) => {
    try {
      const countries = await Countries.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        attributes: ["id", "name", "flag", "continent", "population"],
      });
      if (!countries) {
        res.status(404).send("País no encontrado");
      }
      return countries;
    } catch (error) {
      throw error;
    }
  };


  const getCountryById= async (id) => {
    try {

      const country_id = await Countries.findOne({
          where: {
              id: id
          },
          include: 
          [{
            attributes: ["id", "name", "difficulty", "duration", "season"],
            model: Activity,
          },],
      })
      if (!country_id) {
        throw new Error("Id del país, no encontrado");
      }
      return country_id;
    } catch (error) {
      throw error;
    }
    }

module.exports = {
    getCountries,
  getCountriesByName,
  getCountryById,
};