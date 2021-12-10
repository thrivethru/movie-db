import { db, DataTypes, Model } from "../../config/db.js";
import Movie from "../movie/movie.model";
import Person from "../person/person.model";
import Position from "../position/position.model";

class CrewMember extends Model {}

CrewMember.init(
  {},
  {
    sequelize: db,
    modelName: "crew-member",
  }
);

export default CrewMember;
