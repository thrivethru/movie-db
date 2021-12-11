import { db, DataTypes, Model } from "../../config/db.js";

class CastMember extends Model {}

CastMember.init(
  {
    characters: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "castMember",
    tableName: "cast_member",
  }
);

export default CastMember;
