module.exports = (sequelize, DataTypes) => {
  const Collecte = sequelize.define("collecte", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER(10),
    },
    employe_id: {
      type: DataTypes.INTEGER,
    },
  });

  return Collecte;
};
