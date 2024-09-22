const express = require("express");
const router = express.Router();
const { handlePost, handleGet } = require("../controllers/bfhlController");

router.post("/", handlePost);
router.get("/", handleGet);

module.exports = router;
