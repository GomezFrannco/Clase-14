import { Router } from "express";
import { apiRandom } from "../controllers/api.controllers.js";

const router = Router();

router.get("/api/random?", apiRandom);

export default router;
