const dbConfig = require("../config/dbConfig");

const { Sequelize, Datatypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.trocs = require("./trocModel.js")(sequelize, Datatypes);
db.users = require("./userModel.js")(sequelize, Datatypes);
db.products = require("./productModel.js")(sequelize, Datatypes);

db.sequelize
  .sync({ force: false })
  .then(() => console.log("yes re-sync done !"));

module.exports = db;
