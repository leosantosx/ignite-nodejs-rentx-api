import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  async execute(): Promise<Category[]> {
    return await this.categoryRepository.list();
  }
}

export { ListCategoriesUseCase };
