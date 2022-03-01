import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

class ListSpecificationUseCase {
    constructor(private specificationRepository: SpecificationsRepository) { }
    execute() {
        return this.specificationRepository.list()
    }
}

export { ListSpecificationUseCase }