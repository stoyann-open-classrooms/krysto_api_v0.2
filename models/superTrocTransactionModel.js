module.exports = (sequelize, DataTypes) => {
  const SuperTrocTransaction = sequelize.define("super_troc_transaction", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },

    debiteur_id: {
      type: DataTypes.INTEGER(10),
    },
    super_troc_id: {
      type: DataTypes.INTEGER(10),
    },
  });

  return SuperTrocTransaction;
};
