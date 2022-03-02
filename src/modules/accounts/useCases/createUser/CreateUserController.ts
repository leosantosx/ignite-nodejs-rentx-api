import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, driver_license, name, password, username } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const user = await createUserUseCase.execute({
      email,
      driver_license,
      name,
      password,
      username,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
