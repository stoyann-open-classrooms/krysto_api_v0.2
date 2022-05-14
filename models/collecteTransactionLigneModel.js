module.exports = (sequelize, DataTypes) => {
  const CollecteTransactionLigne = sequelize.define(
    "collecte_transaction_ligne",
    {
      id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      plasticType_id: {
        type: DataTypes.INTEGER(10),
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
      },
    }
  );

  return CollecteTransactionLigne;
};
