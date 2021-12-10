import { db } from "./db.js";
import Movie from "../api/movie/movie.model.js";

const movies = [
  { title: "Gladiator", runningTime: 155, releaseDate: "2000" },
  { title: "Elf", runningTime: 97, releaseDate: "2003" },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Movie.bulkCreate(movies, { validate: true });
    await db.close();
    return "Good";
  } catch (error) {
    await db.close();
    return error;
  }
};

export default seed;
