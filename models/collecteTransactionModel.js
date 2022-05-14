module.exports = (sequelize, DataTypes) => {
  const CollecteTransaction = sequelize.define("collecte_transaction", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    transaction_ligne_id: {
      type: DataTypes.INTEGER(10),
    },
    collecte_id: {
      type: DataTypes.INTEGER,
    },
  });

  return CollecteTransaction;
};
