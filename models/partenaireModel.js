module.exports = (sequelize, DataTypes) => {
  const Partenaire = sequelize.define("partenaire", {
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
      type: DataTypes.INTEGER,
    },
    website: {
      type: DataTypes.STRING,
    },
    facebook: {
      type: DataTypes.STRING,
    },
  });

  return Partenaire;
};
