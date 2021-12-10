import express from "express";
import restFactory from "../../utils/rest-route.factory.js";
import Position from "./position.model.js";

export default await restFactory(Position);
