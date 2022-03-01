import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";

export default (): ImportCategoryController => {
  const categoryRepository = new CategoryRepository();
  const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
  const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
  );

  return importCategoryController;
};
