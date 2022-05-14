module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
    },

    username: {
      type: DataTypes.STRING(100),
      defaultVAlue: "",
      allowNul: false,
    },

    email: {
      type: DataTypes.STRING(250),
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(64),
      is: /^[0-9a-f]{64}$/i, // contrainte
    },
  });
  return User;
};
