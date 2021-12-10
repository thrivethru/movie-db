import { db, DataTypes, Model } from "../../config/db.js";

class Position extends Model {}

Position.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "position",
  }
);

export default Position;
