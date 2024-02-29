const express = require("express");
const {
  saveData,
  getData,
  delData,
  upData,
} = require("../controller/menuController");

const router = express.Router();

router.post("/create", saveData);
router.get("/", getData);
router.delete("/delete/:_id", delData);
router.put("/update/:_id", upData);

module.exports = router;