import CastMember from "./cast-member.model.js";
import testModel from "../../utils/test-model.factory.js";

const testData = [{ character: "Maximus" }, { character: "Commodous" }];

const testUpdateData = [{ character: "Dr. Peter Venkman" }];

testModel(CastMember, testData, testUpdateData);
