const db = require("../models");
// image Upload
const multer = require("multer");
const path = require("path");
// model
const PlasticType = db.plastic_types;

// functions

//1. Add Review

const addPlasticType = async (req, res) => {
  const id = req.params.id;

  let data = {
    image: req.file.path,
    name: req.body.name,
    description: req.body.description,
  };

  const plasticType = await PlasticType.create(data);
  res.status(200).send(plasticType);
};

// 2. Get All Reviews

const getAllPlasticTypes = async (req, res) => {
  const plasticTypes = await PlasticType.findAll({});
  res.status(200).send(plasticTypes);
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
  addPlasticType,
  getAllPlasticTypes,
  upload,
};
