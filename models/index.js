const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
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
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
///====================== synchronisation des models

db.products = require("./productModel.js")(sequelize, DataTypes);
db.reviews = require("./reviewModel.js")(sequelize, DataTypes);
db.trocs = require("./trocModel.js")(sequelize, DataTypes);
db.users = require("./userModel.js")(sequelize, DataTypes);
db.plastic_types = require("./plasticTypeModel.js")(sequelize, DataTypes);
db.adresses = require("./adresseModel.js")(sequelize, DataTypes);
db.associations = require("./associationModel.js")(sequelize, DataTypes);
db.villes = require("./villeModel.js")(sequelize, DataTypes);
db.quartiers = require("./quartierModel.js")(sequelize, DataTypes);
db.troc_transactions = require("./trocTransactionModel.js")(
  sequelize,
  DataTypes
);
db.troc_categories = require("./trocCategoryModel")(sequelize, DataTypes);
db.super_troc_transactions = require("./superTrocTransactionModel")(
  sequelize,
  DataTypes
);
db.super_trocs = require("./superTrocModel")(sequelize, DataTypes);
db.revendeur_products = require("./revendeurProductModel")(
  sequelize,
  DataTypes
);
db.revendeurs = require("./revendeurModel")(sequelize, DataTypes);
db.partenaires = require("./partenaireModel")(sequelize, DataTypes);
db.recyclable_product_plastic_types =
  require("./recyclableProductPlasticTypes")(sequelize, DataTypes);

db.recyclable_products = require("./recyclableProductModel")(
  sequelize,
  DataTypes
);
db.messages = require("./messageModel")(sequelize, DataTypes);
db.marques = require("./marqueModel")(sequelize, DataTypes);
db.employes = require("./employeModel")(sequelize, DataTypes);
db.dons = require("./donModel")(sequelize, DataTypes);
db.color_products = require("./colorProductModel")(sequelize, DataTypes);
db.colors = require("./colorModel")(sequelize, DataTypes);
db.collecte_transaction_lignes = require("./collecteTransactionLigneModel")(
  sequelize,
  DataTypes
);
db.collecte_transactions = require("./collecteTransactionModel.js")(
  sequelize,
  DataTypes
);
db.collectes = require("./collecteModel")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

// ================ todo = mise en place des relations
// 1 to Many Relation

db.products.hasMany(db.reviews, {
  foreignKey: "product_id",
  as: "review",
});

db.reviews.belongsTo(db.products, {
  foreignKey: "product_id",
  as: "product",
});

// 1 to Many Relation
db.users.hasMany(db.trocs, {
  foreignKey: "author_id",
  as: "troc",
});
db.trocs.belongsTo(db.users, {
  foreignKey: "author_id",
  as: "user",
});

module.exports = db;
