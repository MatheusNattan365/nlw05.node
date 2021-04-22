import { Router } from "express";

const routes = Router();

routes.get("/user", (request, response) => {
  response.json({ Hello: "world" });
});

export { routes };
