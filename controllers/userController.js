const db = require("../models");
const bcrypt = require("bcrypt");
// image Upload
const multer = require("multer");
const path = require("path");

// create main Model
const User = db.users;

// main work

// 1. create product

const addUser = async (req, res) => {
  let info = {
    image: req.file.path,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  //  hashage du mot de passe
  await bcrypt.hash(req.body.password, 10).then((hash) => {
    info.password = hash;

    // Création  de l'uttilisateur
    const user = User.create(info);
    res.status(200).send(user);
    console.log(info);
  });
};

// 2. get all trocs

const getAllUsers = async (req, res) => {
  let users = await User.findAll({});
  res.status(200).send(users);
};

// 3. get single troc

const getOneUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { id: id } });
  res.status(200).send(user);
};

// 4. update Product

const updateUser = async (req, res) => {
  let id = req.params.id;

  const user = await User.update(req.body, { where: { id: id } });

  res.status(200).send(user);
};

// 5. delete product by id

const deleteUser = async (req, res) => {
  let id = req.params.id;

  await User.destroy({ where: { id: id } });

  res.status(200).send("user is deleted !");
};

// 7. connect one to many relation User and Troc

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
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  upload,
};
