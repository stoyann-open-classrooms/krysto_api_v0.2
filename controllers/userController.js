const db = require("../models");
const bcrypt = require("bcrypt");
// image Upload
const multer = require("multer");
const path = require("path");

// create main Model
const User = db.users;
const Adresse = db.adresses;
const Troc = db.trocs;
// main work

// 1. create product

const addUser = async (req, res) => {
  let info = {
    image: req.file.path,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  let user = await User.findOne({
    where: { email: info.email },
    raw: true,
  }).then((user) => {
    //Vérification si l'uttisateur existe déjà
    if (user !== null) {
      return res.status(409).json({
        message: `⛔️ Un uttilisateur est déja inscrit avec cette email ! ⛔️`,
      });
    }

    // hachage du mot de passe de l'uttilisateur

    bcrypt
      .hash(info.password, 10)
      .then((hash) => {
        info.password = hash;

        // Création  de l'uttilisateur

        User.create(info)
          .then((user) =>
            res.json({ message: " ✅ New user created", data: user })
          )
          .catch((err) =>
            res.status(500).json({ message: "⛔️ Database error", error: err })
          );
      })

      .catch((err) =>
        res
          .status(500)
          .json({ message: "⛔️ Database error ⛔️⛔️⛔️⛔️", error: err })
      );
  });

  //  hashage du mot de passe
  // await bcrypt.hash(req.body.password, 10).then((hash) => {
  //   info.password = hash;

  //   // Création  de l'uttilisateur
  //   const user = User.create(info);
  //   res.status(200).send(info);
  // });
};

// 2. get all trocs

const getAllUsers = async (req, res) => {
  let users = await User.findAll()
    .then((users) =>
      res.json({
        message: " ✅Tous les uttilisateur ont étè trouvé",
        data: users,
      })
    )
    .catch((err) =>
      res.status(500).json({ message: `⛔️ Database Error`, error: err })
    );
};

// 3. get single troc

const getOneUser = async (req, res) => {
  let userId = parseInt(req.params.id);
  //Vérification si le champs id est présent et cohérent
  if (!userId) {
    return res.json(400).json({ message: " ⛔️ Missing parameter" });
  }
  //Récuperation de l'uttilisateur
  User.findOne({ where: { id: userId }, raw: true })
    .then((user) => {
      if (user === null) {
        return res
          .status(404)
          .json({ message: " ⛔️ This user does not exist !" });
      }
      // Uttilisateur trouvée
      return res.json({ data: user });
    })
    .catch((err) =>
      res.status(500).json({ message: " ⛔️ Database error", error: err })
    );
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

// 7. connect one to many relation Product and Reviews

const getUserAdresse = async (req, res) => {
  const id = req.params.id;

  const data = await User.findOne({
    include: [
      {
        model: Adresse,
        as: "adresse",
      },
    ],
    where: { id: id },
  });

  res.status(200).send(data);
};
const getUserTrocs = async (req, res) => {
  const id = req.params.id;

  const data = await User.findAll({
    include: [
      {
        model: Troc,
        as: "troc",
      },
    ],
    where: { id: id },
  });

  res.status(200).send(data);
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
  addUser,
  getAllUsers,
  getOneUser,
  getUserAdresse,
  updateUser,
  deleteUser,
  getUserTrocs,
  upload,
};
