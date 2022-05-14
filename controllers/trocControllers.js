const db = require("../models");

// create main model

const Troc = db.trocs;
const User = db.users;

//main work

//1. create troc
const addTroc = async (req, res) => {
  let info = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  };

  const troc = await Troc.create(info);
  res.status(200).send(troc);
  console.log(troc);
};

//2. get all trocs

const getAllTrocs = async (req, res) => {
  let trocs = await Troc.findAll({});
  res.status(200).send(trocs);
};
//3. get single trocs

const getOneTrocs = async (req, res) => {
  let id = req.params.id;
  let troc = await Troc.findOne({ where: { id: id } });
  res.status(200).send(troc);
};
//3. get update  trocs

const updateTrocs = async (req, res) => {
  let id = req.params.id;
  const troc = await Troc.update(req.body, { where: { id: id } });
  res.status(200).send(troc);
};

//3. delete troc

const deleteTrocs = async (req, res) => {
  let id = req.params.id;
  await Troc.destroy({ where: { id: id } });
  res.status(200).send(`Troc is delete`);
};

module.exports = {
  addTroc,
  getAllTrocs,
  getOneTrocs,
  updateTrocs,
  deleteTrocs,
};
