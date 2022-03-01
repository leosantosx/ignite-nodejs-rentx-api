import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import {
  ICategoryRepository,
  ICategoryRepositoryDTO,
} from "../ICategoriesRepository";

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({
    name,
    description,
  }: ICategoryRepositoryDTO): Promise<Category> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);

    return category;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
}

export { CategoryRepository };
