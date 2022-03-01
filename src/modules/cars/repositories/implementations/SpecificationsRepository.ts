import { response } from "express";
import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[]
    private static INSTANCE: SpecificationsRepository
    
    private constructor(){
        this.specifications = []
    }

    static getInstance(): SpecificationsRepository {
        if(!SpecificationsRepository.INSTANCE){
            SpecificationsRepository.INSTANCE = new SpecificationsRepository()
        }
        return SpecificationsRepository.INSTANCE
    }
    
    create({ name, description }: ICreateSpecificationDTO) {
        const specification = new Specification()
        Object.assign(specification, { name, description })
        this.specifications.push(specification) 
    }

    list(): Specification[] {
        return this.specifications
    }
}

export { SpecificationsRepository }