const { Router } = require('express');
const { getAllCountries, getCountriById } = require('../controllers/Country');
const { getNewActivity, getAllActivity, getActId } = require('../controllers/Activity');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", getAllCountries); 
router.get("/countries/:id", getCountriById); 
router.post('/activity', getNewActivity);
router.get('/activity/', getAllActivity);
router.get('/activity/:id', getActId);


module.exports = router;







module.exports = router;
