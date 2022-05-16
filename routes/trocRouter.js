// import controllers
const trocController = require("../controllers/trocController.js");

// router
const router = require("express").Router();

// trocs routers
router.post("/addTroc/", trocController.upload, trocController.addTroc);

router.get("/alltrocs", trocController.getAllTrocs);

router.get("/published", trocController.getPublishedTrocs);

router.get("/:id", trocController.getOneTroc);

router.put("/:id", trocController.updateTroc);

router.delete("/:id", trocController.deleteTroc);

module.exports = router;
