// import controllers
const userController = require("../controllers/userController.js");
const adresseController = require("../controllers/adresseController");

// router
const router = require("express").Router();

// use routers
router.post("/addUser", userController.upload, userController.addUser);

router.get("/allusers", userController.getAllUsers);

// Review Url and Controller

router.get("/allAdresses", adresseController.getAllAdresses);
router.post("/addAdresse/:id", adresseController.addAdresse);

// get product Reviews
router.get("/getUserAdresse/:id", userController.getUserAdresse);

router.get("/:id", userController.getOneUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
