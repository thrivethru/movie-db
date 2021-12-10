import Genre from "./genre.model.js";
import testModel from "../../utils/test-model.factory.js";

const testData = [{ name: "Action" }, { name: "Adventure" }];

const testUpdateData = [{ name: "Horror" }];

testModel(Genre, testData, testUpdateData);
