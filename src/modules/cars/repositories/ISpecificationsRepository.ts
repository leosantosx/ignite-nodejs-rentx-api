import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  list(): Specification[];
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
