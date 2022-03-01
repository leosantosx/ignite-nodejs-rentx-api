import { getRepository, Repository } from "typeorm";
import { Category } from "../../model/Category";
import {
  ICategoryRepository,
  ICategoryRepositoryDTO,
} from "../ICategoriesRepository";

class CategoryRepository implements ICategoryRepository {
  //   private categories: Category[];
  private static INSTANCE: CategoryRepository;
  private repository: Repository<Category>;

  private constructor() {
    this.repository = getRepository(Category);
  }

  static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }

  create({ name, description }: ICategoryRepositoryDTO): Category {
    const category = this.repository.create({
      name,
      description,
    });

    return category;
  }

  list(): Category[] {
    return [];
  }
}

export { CategoryRepository };
