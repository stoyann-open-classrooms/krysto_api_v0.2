const db = require("../models");

// image Upload
const multer = require("multer");
const path = require("path");

// create main Model
const Troc = db.trocs;

// main work

// 1. create product

const addTroc = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  let info = {
    image: req.file.path,
    author_id: id,
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const troc = await Troc.create(info);
  res.status(200).send(troc);
  console.log(troc);
};

// 2. get all trocs

const getAllTrocs = async (req, res) => {
  let trocs = await Troc.findAll({});
  res.status(200).send(trocs);
};

// 3. get single troc

const getOneTroc = async (req, res) => {
  let id = req.params.id;
  let troc = await Troc.findOne({ where: { id: id } });
  res.status(200).send(troc);
};

// 4. update Product

const updateTroc = async (req, res) => {
  let id = req.params.id;

  const troc = await Troc.update(req.body, { where: { id: id } });

  res.status(200).send(troc);
};

// 5. delete product by id

const deleteTroc = async (req, res) => {
  let id = req.params.id;

  await Troc.destroy({ where: { id: id } });

  res.status(200).send("Troc is deleted !");
};
// 7. connect one to many relation User and Troc

const getUserTrocs = async (req, res) => {
  const id = req.params.id;

  const data = await Troc.findAll({
    include: [
      {
        model: User,
        as: "user",
      },
    ],
    where: { author_id: id },
  });

  res.status(200).send(data);
};

// 6. get published product

const getPublishedTrocs = async (req, res) => {
  const trocs = await Troc.findAll({ where: { published: true } });

  res.status(200).send(trocs);
};

// 8. Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

module.exports = {
  addTroc,
  getAllTrocs,
  getOneTroc,
  updateTroc,
  deleteTroc,
  getPublishedTrocs,
  getUserTrocs,
  upload,
};
