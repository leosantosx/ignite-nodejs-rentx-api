import { getRepository, Repository } from "typeorm";
import { ICreateUserDto } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepositories";

class UsersRepository implements IUsersRepository {
  repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    email,
    name,
    username,
    password,
    driver_license,
  }: ICreateUserDto): Promise<User> {
    const user = this.repository.create({
      email,
      name,
      username,
      password,
      driver_license,
    });

    await this.repository.save(user);

    return user;
  }
}

export { UsersRepository };
