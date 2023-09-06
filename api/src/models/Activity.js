const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("activity", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // difficulty: {
    //   type: DataTypes.INTEGER,
    //   validate: {
    //     min: 1,
    //     max: 5,
    //   },
    //   allowNull: false,
    // },
    // duration: DataTypes.TIME,
    // season: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  });
};

/* 
-  ID. \*
-  Nombre. \*
-  Dificultad (número del 1 al 5). \*
-  Duración (en horas).
-  Temporada (Verano, Otoño, Invierno o Primavera). \*
*/
