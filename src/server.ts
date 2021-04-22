import express from "express";
import "reflect-metadata";
import "./database";
const app = express();

import { routes } from "./routes";

app.use(routes);
app.use(express.json());

app.listen(3333, () => console.log("Server run on PORT: 3333"));

// missaoespacial
// embuscadoproximonivel
