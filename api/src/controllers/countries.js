const {Country} = require("../db.js");


const createCountries = (req, res) => {
  fetch("https://restcountries.com/v3/all")
    .then((res) => {
      if (!res.ok) {
        throw new Error("❌");
      }
      return res.json();
    })
    .then((data) => {
      const countries = data;
      countries.forEach( async (c) => {
        // console.log(c.cca3)
        if(c.capital){
          await Country.create({
            id: c.cca3,
            name: c.name.common,
            flags: c.flags,
            continents: c.continents,
            capital: c.capital,
            subregion: c.subregion,
            area: c.area,
            population: c.population,
            maps: c.maps.googleMaps,
          });
        }
      });
      res.send('Country created');
    })

    .catch((err) => {
      console.error(err);
      res.status(500).json({message: err.message})
    });
};

const getAllCountries = async (req, res) => {
try {
  const countries = await Country.findAll();
  res.json(countries);
} catch (err) {
  res.status(500).json({message: err.message})
}
};

const getCountryById = (req, res) => {
  const country = Country.findByPk(req.body)
  res.send();
};

const getCountryByName = (req, res) => {
  res.send("Argentina");
};

module.exports = {
  createCountries,
  getAllCountries,
  getCountryById,
  getCountryByName,
};
