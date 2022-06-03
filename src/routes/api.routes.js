const { Router } = require("express");
const { apiRandom } = require("../controllers/api.controllers.js");

const router = Router();

router.get("/api/random?", apiRandom);

module.exports = router;
