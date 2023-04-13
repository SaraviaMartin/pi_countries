const { Router } = require('express');
const { getAllCountries, getCountriById } = require('../controllers/Country');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", getAllCountries);
  
router.get("/countries/:id", getCountriById);
  
  router.get("/countries/name?=", (req, res) => {
    res.status(200).send("Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).")
  });
  
  router.post("/activities", (req, res) => {
    res.status(200).send("Crea una actividad turística")
  });
  
  router.get("/activities", (req, res) => {
    res.status(200).send("Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.")
  });








module.exports = router;
