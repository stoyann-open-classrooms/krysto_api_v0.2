module.exports = (sequelize, DataTypes) => {
  const Revendeur = sequelize.define("revendeur", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
    facebook: {
      type: DataTypes.STRING,
    },
  });

  return Revendeur;
};
