module.exports = (sequelize, DataTypes) => {
  const Quartier = sequelize.define("quartier", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.INTEGER,
    },
  });

  return Quartier;
};
