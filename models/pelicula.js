'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pelicula.belongsToMany(models.categoria, { as: 'categorias', through: 'categoriapelicula', foreignKey: 'peliculaid'});
    }
  }
  pelicula.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING,
      defaultValue: "Sin sinopsis"
    },
    anio: {
      type: DataTypes.INTEGER,
      defaultValue: "N/A"
    },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'pelicula',
  });
  return pelicula;
};