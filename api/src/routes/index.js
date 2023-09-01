const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require("./countries.routes");
const countriesJson = require("../../countries.json");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRouter )


module.exports = router;
