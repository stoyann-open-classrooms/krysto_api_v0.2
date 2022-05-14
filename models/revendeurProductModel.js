module.exports = (sequelize, DataTypes) => {
  const RevendeurProduct = sequelize.define("revendeurProduct", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    revendeur_id: {
      type: DataTypes.INTEGER(10),
    },
    product_id: {
      type: DataTypes.INTEGER(10),
    },
  });

  return RevendeurProduct;
};
