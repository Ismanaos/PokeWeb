const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    life: {
      type: DataTypes.INTEGER
    },

    force: {
      type: DataTypes.INTEGER
    },

    defense: {
      type: DataTypes.INTEGER
    },

    speed: {
      type: DataTypes.INTEGER
    },

    height: {
      type: DataTypes.INTEGER
    },

    weight: {
      type: DataTypes.INTEGER
    }
  });
};
// ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
// Nombre *
// Vida
// Fuerza
// Defensa
// Velocidad
// Altura
// Peso