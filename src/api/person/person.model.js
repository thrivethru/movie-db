import { db, DataTypes, Model } from "../../config/db.js";

class Person extends Model {}

Person.init(
  {
    fullName: DataTypes.STRING,
    birthYear: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "person",
  }
);

export default Person;
