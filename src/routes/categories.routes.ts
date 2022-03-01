import { Router } from "express";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import listCategoriesController from "../modules/cars/useCases/listCategories";
import importCategoryController from "../modules/cars/useCases/importCategory";
import multer from "multer";

const upload = multer({
  dest: "./tmp",
});

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController().handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController().handle(request, response);
});

export { categoriesRoutes };
