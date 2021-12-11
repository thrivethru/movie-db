import { db, DataTypes, Model } from "../../config/db.js";

class CrewMember extends Model {}

CrewMember.init(
  {},
  {
    sequelize: db,
    modelName: "crewMember",
    tableName: "crew_member",
  }
);

export default CrewMember;
