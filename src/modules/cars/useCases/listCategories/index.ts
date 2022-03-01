import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default (): ListCategoriesController => {
  const categoryRepository = new CategoryRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
  );
  return listCategoriesController;
};
