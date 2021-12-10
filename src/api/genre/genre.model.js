import { db, DataTypes, Model } from "../../config/db.js";

class Genre extends Model {}

Genre.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "genre",
  }
);

export default Genre;
