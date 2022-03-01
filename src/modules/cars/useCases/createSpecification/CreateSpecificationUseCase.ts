import { ICreateSpecificationDTO, ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationsRepository) {}
    execute({ name, description }: ICreateSpecificationDTO){
        this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase }