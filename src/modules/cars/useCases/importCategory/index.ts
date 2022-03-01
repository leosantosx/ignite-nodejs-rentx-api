import { ImportCategoryController } from './ImportCategoryController'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'
import { CategoryRepository } from '../../repositories/implementations/CategoriesRepository'

const categoryRepository = CategoryRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }