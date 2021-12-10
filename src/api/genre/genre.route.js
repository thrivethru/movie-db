import express from "express";
import restFactory from "../../utils/rest-route.factory.js";
import Genre from "./genre.model.js";

export default await restFactory(Genre);
