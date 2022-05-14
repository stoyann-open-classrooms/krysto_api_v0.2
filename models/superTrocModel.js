module.exports = (sequelize, DataTypes) => {
  const SuperTroc = sequelize.define("superTroc", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },

    partenaire_id: {
      type: DataTypes.INTEGER(10),
    },

    title: {
      type: DataTypes.STRING(100),
      defaultValue: "",
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "",
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER(10),
      defaultValue: 0,
      allowNull: false,
    },
    published: {
      type: DataTypes.BOOLEAN,
    },
  });
  return SuperTroc;
};
