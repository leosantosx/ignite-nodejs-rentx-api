import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepositories";

@injectable()
class ListUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  execute() {
    return this.usersRepository.list();
  }
}

export { ListUserUseCase };
