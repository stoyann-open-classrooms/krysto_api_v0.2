module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("message", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    author_id: {
      type: DataTypes.INTEGER(10),
    },
    to_id: {
      type: DataTypes.INTEGER(10),
    },

    object: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
  });

  return Message;
};
