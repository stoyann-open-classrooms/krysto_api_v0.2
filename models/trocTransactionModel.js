module.exports = (sequelize, DataTypes) => {
  const TrocTransaction = sequelize.define("troc_transaction", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },

    crediteur_id: {
      type: DataTypes.INTEGER(10),
    },
    debiteur_id: {
      type: DataTypes.INTEGER(10),
    },
  });

  return TrocTransaction;
};
