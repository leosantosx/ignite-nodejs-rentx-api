import { inject, injectable } from "tsyringe";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../../repositories/ISpecificationsRepository";

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}
  execute({ name, description }: ICreateSpecificationDTO) {
    return this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
