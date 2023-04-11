const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('nombre_de_tu_base_de_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql', // o el dialecto de tu base de datos
});

// Modelo 1: Country
const Country = sequelize.define('Country', {
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



// Definir la relación muchos a muchos entre Country y Activity
const CountryActivity = sequelize.define('CountryActivity', {
  // No necesitamos definir columnas adicionales en la tabla intermedia
});

Country.belongsToMany(Activity, { through: CountryActivity });
Activity.belongsToMany(Country, { through: CountryActivity });

// Sincronizar los modelos con la base de datos
(async () => {
  await sequelize.sync({ force: true }); // Puedes usar { force: true } para recrear las tablas en cada sincronización
  console.log('¡Modelos sincronizados con la base de datos!');
})();

