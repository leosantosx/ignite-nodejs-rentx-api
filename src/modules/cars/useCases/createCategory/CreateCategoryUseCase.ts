import {
  ICategoryRepository,
  ICategoryRepositoryDTO,
} from "../../repositories/ICategoriesRepository";

class CreateCategoryUseCase {
  constructor(private categoryRepositories: ICategoryRepository) {}
  execute({ name, description }: ICategoryRepositoryDTO) {
    const category = this.categoryRepositories.create({
      name,
      description,
    });
    return category;
  }
}

export { CreateCategoryUseCase };
