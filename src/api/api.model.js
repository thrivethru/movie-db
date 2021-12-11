import Movie from "./movie/movie.model.js";
import Genre from "./genre/genre.model.js";
import Person from "./person/person.model.js";
import Position from "./position/position.model.js";
import CastMember from "./cast-member/cast-member.model.js";
import CrewMember from "./crew-member/crew-member.model.js";
import MovieGenre from "./movie-genre/movie-genre.model.js";

export default async function modelAssociations() {
  Genre.belongsToMany(Movie, { through: MovieGenre });
  Movie.belongsToMany(Genre, { through: MovieGenre });

  Person.belongsToMany(Movie, { through: CastMember });
  Movie.belongsToMany(Person, { through: CastMember });
  Person.belongsToMany(Movie, { through: CrewMember });
  Movie.belongsToMany(Person, { through: CrewMember });

  CrewMember.belongsTo(Position);
  Position.hasMany(CrewMember);
}

// Genre.belongsToMany("movie", { through: "movieGenre" });
// Movie.belongsToMany("genre", { through: "movieGenre" });

// Person.belongsToMany("movie", { through: "castMember" });
// Movie.belongsToMany("person", { through: "castMember" });
// Person.belongsToMany("movie", { through: "crewMember" });
// Movie.belongsToMany("person", { through: "crewMember" });
