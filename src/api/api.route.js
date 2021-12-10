import express from "express";
import movieRoute from "./movie/movie.route.js";
import personRoute from "./person/person.route.js";

const router = express.Router();

router.use("/movie", movieRoute);
router.use("/person", personRoute);

export default router;
