import { Router } from "express";
import { categoriesRoutes } from "../routes/categories.routes";
import { specificationsRoutes } from "../routes/specifications.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);
routes.use("/users", usersRoutes);

export { routes };
