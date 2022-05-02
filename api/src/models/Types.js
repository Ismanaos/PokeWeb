const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('types', {
      types:{
          type: DataTypes.STRING
      }
    });
  };


// ID
// Nombre