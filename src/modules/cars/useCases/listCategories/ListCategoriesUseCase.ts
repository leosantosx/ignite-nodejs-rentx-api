import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}
    execute(): Category[] {
        return this.categoryRepository.list()
    }
}   

export { ListCategoriesUseCase } 