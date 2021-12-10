import Person from "./person.model.js";
import testModel from "../../utils/test-model.factory.js";

const testData = [
  { firstName: "Brad", lastName: "Pitt" },
  { firstName: "Cuba", lastName: "Gooding", suffix: "Jr" },
];

const testUpdateData = [{ suffix: "Sr" }];

testModel(Person, testData, testUpdateData);
