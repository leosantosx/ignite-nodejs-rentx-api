import { Category } from "../model/Category";

interface ICategoryRepositoryDTO {
    name: string
    description: string
}

interface ICategoryRepository {
    list(): Category[]
    create({ name, description }: ICategoryRepositoryDTO): void
}

export { ICategoryRepository, ICategoryRepositoryDTO }