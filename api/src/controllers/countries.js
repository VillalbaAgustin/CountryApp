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
      res.send('Coutry created');
    })

    .catch((err) => {
      console.error(err);
    });
};

const getAllCountries = (req, res) => {
  res.send("Geting countries");
};

const getCountryById = (req, res) => {
  res.send("Argentina");
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
