const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    flags: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    continents: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    capital: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    subregion: DataTypes.STRING,
    area: DataTypes.FLOAT,
    population: { type: DataTypes.INTEGER, allowNull: false },
    maps: DataTypes.STRING,
  });
};




