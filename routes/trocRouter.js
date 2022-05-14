// import controllers review, products
const trocController = require("../controllers/trocController.js");
const reviewController = require("../controllers/reviewController");

// router
const router = require("express").Router();

// use routers
router.post("/addTroc", trocController.upload, trocController.addTroc);

router.get("/alltrocs", trocController.getAllTrocs);

router.get("/published", trocController.getPublishedTrocs);

// // Review Url and Controller

// router.get('/allReviews', reviewController.getAllReviews)
// router.post('/addReview/:id', reviewController.addReview)

// get product Reviews
// router.get('/getProductReviews/:id', productController.getProductReviews)

// Products router
router.get("/:id", trocController.getOneTroc);

router.put("/:id", trocController.updateTroc);

router.delete("/:id", trocController.deleteTroc);

module.exports = router;
