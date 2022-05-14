module.exports = (sequelize, DataTypes) => {
  const Employe = sequelize.define("employe", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.INTEGER,
    },
  });

  return Employe;
};
