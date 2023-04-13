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
  
  //busqueda de país por id
  // const getCountryById = async (id) => {
  //   try {
  //     const country = await Countries.findByPk({
  //       where :{
  //         id :id
  //       },
  //       attributes: [
  //         "id",
  //         "name",
  //         "flag",
  //         "continent",
  //         "capital",
  //         "subregion",
  //         "population",
  //       ],
  //       include: [
  //         {
  //           model: Activity,
  //           attributes: ["id", "name", "difficulty", "duration", "season"],
  //         },
  //       ],
  //     });
  //     if (!country) {
  //       throw new Error("Id del país, no encontrado");
  //     }
  //     return country;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  const getCountryById= async (id) => {
    const country_id = await Countries.findOne({
        where: {
            id: id
        },
        include: 
        [
                  {
                    model: Activity,
                    attributes: ["id", "name", "difficulty", "duration", "season"],
                  },
                ],
    })

    const country = country_id === null ? "DIRECCIONAR A 404" : country_id
    return country
};

  //========================= /countries    y por query ========================

const getAllCountries = async (req, res) => {
    try {
      const name = req.query.name;
      if (name) {
        const countries = await getCountriesByName(name);
        countries.length
          ? res.status(200).send(countries)
          : res.status(404).send("País no encontrado");
      } else {
        const countries = await getCountries();
        countries.length
          ? res.status(200).json(countries)
          : res.status(404).send("País no encontrado");
      }
    } catch (error) {
      console.log("PROBLEMAS EN EL LLAMADO A LA API POR QUERY");
    }
  };
  
  //========================= /countries/:idPais ========================
  
  const getCountriById = async (req, res) => {
    try {
      const { id } = req.params;
      const country = await getCountryById(id);
      if (!country) {
        res.status(404).send("No existe un país con esa Id");
      }
      res.json(country);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getAllCountries,
    getCountriById,
  };