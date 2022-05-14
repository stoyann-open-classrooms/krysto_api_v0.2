module.exports = (sequelize, DataTypes) => {
  const Marque = sequelize.define("marque", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.INTEGER,
    },

    description: {
      type: DataTypes.TEXT,
    },
  });

  return Marque;
};
