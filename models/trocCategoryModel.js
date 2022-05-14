module.exports = (sequelize, DataTypes) => {
  const TrocCategory = sequelize.define("troc_category", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.INTEGER(10),
    },
    description: {
      type: DataTypes.TEXT,
    },
  });

  return TrocCategory;
};
