const { Router } = require("express");
const { processInfo } = require("../controllers/info.controllers.js");

const router = Router();

router.get("/info", processInfo);
router.get("/", (_req, res) => {
  res.redirect("/info");
});

module.exports = router;
