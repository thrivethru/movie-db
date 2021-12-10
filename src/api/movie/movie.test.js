import Movie from "./movie.model.js";
import testModel from "../../utils/test-model.factory.js";

const testData = [
  { title: "Gladiator", runningTime: 155, releaseDate: "2000" },
  { title: "Elf", runningTime: 97, releaseDate: "2003" },
];

const testUpdateData = [
  { title: "Dune", runningTime: 155, releaseDate: "2021" },
];

testModel(Movie, testData, testUpdateData);
