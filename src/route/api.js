const express = require("express");
const router = express.Router();
const FoodController = require("../controller/FoodController");

router.get("/Read",FoodController.Read);
router.get("/Delete/:id",FoodController.Delete);
router.get("/ReadSingleApi/:id",FoodController.ReadSingleApi);
router.post("/Create",FoodController.Create);
router.post("/Update/:id",FoodController.Update);

module.exports = router;