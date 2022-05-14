module.exports = (sequelize, DataTypes) => {
  const PlasticType = sequelize.define("plastic_Type", {
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
      type: DataTypes.TEXT,
    },
  });

  return PlasticType;
};
