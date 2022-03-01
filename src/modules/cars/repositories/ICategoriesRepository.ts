import { Category } from "../entities/Category";

interface ICategoryRepositoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  list(): Promise<Category[]>;
  create({ name, description }: ICategoryRepositoryDTO): Promise<Category>;
}

export { ICategoryRepository, ICategoryRepositoryDTO };
