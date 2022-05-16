module.exports = (sequelize, DataTypes) => {
  const Adresse = sequelize.define("adresse", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER(10),
    },
    content: {
      type: DataTypes.TEXT,
    },
    zip_code: {
      type: DataTypes.INTEGER,
    },
  });

  return Adresse;
};
