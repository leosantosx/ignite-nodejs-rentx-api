import { inject, injectable } from "tsyringe";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: SpecificationsRepository
  ) {}
  execute() {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationUseCase };
