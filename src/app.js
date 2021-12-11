import express from "express";
import Handlebars from "handlebars";
import expressHandlebars from "express-handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import modelAssociations from "./api/api.model.js";
import routes from "./routes.js";

const app = express();

modelAssociations();

const handlebars = expressHandlebars.create({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("views", "./src/web/views");

app.use("/static", express.static("./src/web/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

export default app;
