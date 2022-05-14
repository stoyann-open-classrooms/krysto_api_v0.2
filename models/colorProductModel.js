module.exports = (sequelize, DataTypes) => {
  const ColorProduct = sequelize.define("color_product", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    color_id: {
      type: DataTypes.INTEGER(10),
    },
    product_id: {
      type: DataTypes.INTEGER(10),
    },
  });

  return ColorProduct;
};
