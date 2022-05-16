const db = require("../models");

// model
const Adresse = db.adresses;

// functions

//1. Add adresse

const addAdresse = async (req, res) => {
  const id = req.params.id;

  let data = {
    user_id: id,
    content: req.body.content,
    zip_code: req.body.zip_code,
  };

  const adresse = await Adresse.create(data);
  res.status(200).send(adresse);
};

// 2. Get All Reviews

const getAllAdresses = async (req, res) => {
  const adresses = await Adresse.findAll({});
  res.status(200).send(adresses);
};

module.exports = {
  addAdresse,
  getAllAdresses,
};
