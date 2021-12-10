import { db, DataTypes, Model } from "../../config/db.js";

class Movie extends Model {}

Movie.init(
  {
    title: DataTypes.STRING,
    runningTime: DataTypes.INTEGER,
    releaseDate: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "movie",
  }
);

export default Movie;
