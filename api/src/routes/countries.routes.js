const { Router } = require("express");
const {
  createCountries,
  getAllCountries,
  getCountryById,
  getCountryByName,
} = require("../controllers/countries");
// Importar todos los controllers;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/", createCountries);
router.get("/", getAllCountries);
router.get("/:idPais", getCountryById);
router.get("/name?", getCountryByName);

module.exports = router;
