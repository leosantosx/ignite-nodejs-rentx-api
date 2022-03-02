import { inject, injectable } from "tsyringe";
import { ICreateUserDto } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepositories";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  execute({ email, driver_license, name, password, username }: ICreateUserDto) {
    return this.usersRepository.create({
      email,
      driver_license,
      name,
      password,
      username,
    });
  }
}

export { CreateUserUseCase };
