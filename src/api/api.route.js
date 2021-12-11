import express from "express";
import movieRoute from "./movie/movie.route.js";
import personRoute from "./person/person.route.js";
import genreRoute from "./genre/genre.route.js";
import castMemberRoute from "./cast-member/cast-member.route.js";
import crewMemberRoute from "./crew-member/crew-member.route.js";
import positionRoute from "./position/position.route.js";

const router = express.Router();

router.use("/movie", movieRoute);
router.use("/person", personRoute);
router.use("/genre", genreRoute);
router.use("/cast-member", castMemberRoute);
router.use("/crew-member", crewMemberRoute);
router.use("/position", positionRoute);

export default router;
