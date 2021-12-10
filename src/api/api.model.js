import Movie from "./movie/movie.model";
import Genre from "./genre/genre.model";
import Person from "./person/person.model";
import Position from "./position/position.model";
import CrewMember from "./crew-member/crew-member.model";

Genre.belongsToMany("movie", { through: "movie-genre" });
Movie.belongsToMany("genre", { through: "movie-genre" });
