import {
  ICategoryRepository,
  ICategoryRepositoryDTO,
} from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository
  ) {}
  execute({ name, description }: ICategoryRepositoryDTO) {
    const category = this.categoriesRepository.create({
      name,
      description,
    });

    return category;
  }
}

export { CreateCategoryUseCase };
