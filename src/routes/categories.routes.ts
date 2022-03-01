import { Router } from "express";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import multer from "multer";

const upload = multer({
  dest: "./tmp",
});

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
