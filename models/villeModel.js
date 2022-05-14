module.exports = (sequelize, DataTypes) => {
  const Ville = sequelize.define("ville", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.INTEGER,
    },
  });

  return Ville;
};
