import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    const { file } = request;

    if (!file) {
      return response.status(400).send("File not sent");
    }

    const categories = await importCategoryUseCase.execute(file);

    return response.status(201).json(categories);
  }
}

export { ImportCategoryController };
