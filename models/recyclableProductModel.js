module.exports = (sequelize, DataTypes) => {
  const RecyclableProduct = sequelize.define("recyclable_product", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    marque_id: {
      type: DataTypes.INTEGER(10),
    },
  });

  return RecyclableProduct;
};
