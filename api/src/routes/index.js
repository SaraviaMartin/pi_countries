const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", (req, res) =>{
    res.status(200).send("Aqui estaran todos los paises")
  });
  
  router.get("/countries/:idPais", (req, res) => {
    res.status(200).send("Detalles de todos los paises")
  });
  
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
