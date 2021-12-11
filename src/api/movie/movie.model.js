import { db, DataTypes, Model } from "../../config/db.js";

class Movie extends Model {}

Movie.init(
  {
    title: DataTypes.STRING,
    releaseYear: DataTypes.STRING,
    runtimeMinutes: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "movie",
  }
);

export default Movie;
