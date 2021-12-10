import { db, DataTypes, Model } from "../../config/db.js";

class Person extends Model {}

Person.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    suffix: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "person",
  }
);

export default Person;
