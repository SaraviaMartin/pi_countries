const { DataTypes } = require('sequelize');
// Modelo 2: Activity
module.exports = (sequelize) => {
  sequelize.define('Activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.ENUM("1","2","3","4","5"),
      allowNull: false,
    },
    duracion: {
      type: DataTypes.INTEGER,
    },
    temporada: {
      type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
      allowNull: false,
    },
  });
}
    