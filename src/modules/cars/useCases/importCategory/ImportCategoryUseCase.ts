import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import fs from 'fs'
import { parse as csvParse } from 'csv-parse'

interface IImportCategory {
    name: string
    description: string
}

class ImportCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository){}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = []
            const stream = fs.createReadStream(file.path)
            
            const parseFile = csvParse()
            
            stream.pipe(parseFile)
            
            parseFile.on('data', async (line) => {
                const [name, description] = line
                categories.push({
                    name,
                    description,
                })
            }).on("end", () => {
                fs.promises.unlink(file.path)
                resolve(categories)
            }).on("error", (err) => {
                reject(err)
            })
        })
    }

    async execute(file: Express.Multer.File): Promise<void>{
        const categories = await this.loadCategories(file)
        categories.forEach(async category => {
            const { name, description } = category
            this.categoryRepository.create({ name, description })
        })
    }
}

export { ImportCategoryUseCase }