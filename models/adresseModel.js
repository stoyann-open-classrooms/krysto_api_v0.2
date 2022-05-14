module.exports = (sequelize, DataTypes) => {
  const Adresse = sequelize.define("adresse", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
    },
    zip_code: {
      type: DataTypes.INTEGER,
    },
  });

  return Adresse;
};
