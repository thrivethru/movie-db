import { db, DataTypes, Model } from "../../config/db.js";

class CastMember extends Model {}

CastMember.init(
  {
    character: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "castMember",
  }
);

export default CastMember;
