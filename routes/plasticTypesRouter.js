// import controllers review, products

const plasticTypeController = require("../controllers/plasticTypeController");
// router
const router = require("express").Router();

// use routers
router.post(
  "/addPlasticType",
  plasticTypeController.upload,
  plasticTypeController.addPlasticType
);

router.get("/allPlasticTypes", plasticTypeController.getAllPlasticTypes);

// Review Url and Controller

router.get("/allProducts", plasticTypeController.getAllPlasticTypes);
router.post("/addProduct/:id", plasticTypeController.addPlasticType);

module.exports = router;
