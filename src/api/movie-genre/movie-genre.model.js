import { db, DataTypes, Model } from "../../config/db.js";

class MovieGenre extends Model {}

MovieGenre.init(
  {},
  {
    sequelize: db,
    modelName: "movieGenre",
    tableName: "movie_genre",
  }
);

export default MovieGenre;
