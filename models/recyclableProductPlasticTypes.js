module.exports = (sequelize, DataTypes) => {
  const RecyclableProductPlasticTypes = sequelize.define(
    "RecyclableProductPlasticType",
    {
      id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      recyclable_product_id: {
        type: DataTypes.INTEGER(10),
      },
      plastic_type_id: {
        type: DataTypes.INTEGER(10),
      },
    }
  );

  return RecyclableProductPlasticTypes;
};
