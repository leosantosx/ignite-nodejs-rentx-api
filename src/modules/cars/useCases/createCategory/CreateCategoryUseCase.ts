import {
  ICategoryRepository,
  ICategoryRepositoryDTO,
} from "../../repositories/ICategoriesRepository";

class CreateCategoryUseCase {
  constructor(private categoryRepositories: ICategoryRepository) {}
  execute({ name, description }: ICategoryRepositoryDTO) {
    this.categoryRepositories.create({ name, description });
  }
}

export { CreateCategoryUseCase };
