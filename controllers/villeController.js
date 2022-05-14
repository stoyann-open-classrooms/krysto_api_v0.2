const db = require("../models");

// model
const Ville = db.villes;

// functions

//1. Add Review

const addVille = async (req, res) => {
  const id = req.params.id;

  let data = {
    name: req.body.name,
  };

  const ville = await Ville.create(data);
  res.status(200).send(ville);
};

// 2. Get All Reviews

const getAllVilles = async (req, res) => {
  const villes = await Ville.findAll({});
  res.status(200).send(villes);
};

module.exports = {
  addVille,
  getAllVilles,
};
