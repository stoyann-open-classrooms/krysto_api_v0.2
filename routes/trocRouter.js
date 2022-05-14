// import controllers review, products
const trocController = require("../controllers/trocController.js");

const userController = require("../controllers/userController");
// router
const router = require("express").Router();

// get product Reviews
// router.get("/getProductReviews/:id", productController.getProductReviews);

// use routers
router.post("/addTroc/", trocController.upload, trocController.addTroc);

router.get("/alltrocs", trocController.getAllTrocs);

router.get("/published", trocController.getPublishedTrocs);

// Products router
router.get("/:id", trocController.getOneTroc);

router.put("/:id", trocController.updateTroc);

router.delete("/:id", trocController.deleteTroc);

module.exports = router;
