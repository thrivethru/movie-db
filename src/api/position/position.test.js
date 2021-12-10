import Position from "./position.model.js";
import testModel from "../../utils/test-model.factory.js";

const testData = [{ name: "Director" }, { name: "Producer" }];

const testUpdateData = [{ name: "Writer" }];

testModel(Position, testData, testUpdateData);
