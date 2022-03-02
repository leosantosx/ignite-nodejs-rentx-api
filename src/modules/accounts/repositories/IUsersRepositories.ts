import { ICreateUserDto } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: ICreateUserDto): Promise<User>;
  list(): Promise<User[]>;
}
