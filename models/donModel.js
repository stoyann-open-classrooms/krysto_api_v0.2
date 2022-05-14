module.exports = (sequelize, DataTypes) => {
  const Don = sequelize.define("don", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    association_id: {
      type: DataTypes.INTEGER(10),
    },
    donnateur_id: {
      type: DataTypes.INTEGER(10),
    },

    montant: {
      type: DataTypes.INTEGER,
    },
  });

  return Don;
};
