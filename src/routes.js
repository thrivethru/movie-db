import express from "express";
import api from "./api/api.route.js";
import web from "./web/index.js";

const router = express.Router();

router.use("/api", api);
router.use("/", web);

export default router;
