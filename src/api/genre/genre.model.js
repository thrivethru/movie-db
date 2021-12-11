import { db, DataTypes, Model } from "../../config/db.js";

class Genre extends Model {}

Genre.init(
  {
    genre: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "genre",
  }
);

export default Genre;
