// import controllers review, products
const userController = require("../controllers/userController.js");
const trocController = require("../controllers/trocController");

// router
const router = require("express").Router();

// use routers
router.post("/addUser", userController.upload, userController.addUser);

router.get("/allusers", userController.getAllUsers);

// Review Url and Controller

router.get("/allUsers", userController.getAllUsers);
router.post("/addUsers/:id", userController.addUser);

// get product Reviews
router.get("/getUserTrocs/:id", userController.getUserTrocs);

// Products router
router.get("/:id", userController.getOneUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;