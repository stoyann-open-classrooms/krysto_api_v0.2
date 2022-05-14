"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Troc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Troc.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Troc.init(
    {
      author: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      likes: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Troc",
    }
  );
  return Troc;
};
