module.exports = (sequelize, DataTypes) => {
  const Troc = sequelize.define("troc", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
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
  return Troc;
};
