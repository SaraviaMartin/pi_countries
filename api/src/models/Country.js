const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // Modelo 1: Country
    sequelize.define('Country', {
  id: {
    type: DataTypes.STRING(3), // Tipo de dato para el código de tres letras
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bandera: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  continente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capital: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subregion: {
    type: DataTypes.STRING,
  },
  area: {
    type: DataTypes.INTEGER,
  },
  poblacion: {
    type: DataTypes.INTEGER,
  },
});
}






