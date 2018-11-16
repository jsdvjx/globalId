import { Injectable, Inject } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { Customer } from './customer.entity';
import { RegisterResponse, RegisterParam, TypesResponse } from '../proto/id.interface';

@Injectable()
export class CustomerService {
    constructor(
        @Inject('CustomerRepositoryToken')
        private readonly customerRepository: Repository<Customer>,
    ) {
    }
    async add(params: RegisterParam): Promise<RegisterResponse> {
        try {
            const type = (await this.customerRepository.insert(params)).identifiers[0].type;
            if (type) {
                return { ...params, type };
            }
        }catch (e){
        }
    }
    async find(name: string): Promise<TypesResponse>{
        return {data: await this.customerRepository.find({where: {name: Like(`%${name}%`)}})};
    }
    async get(type: number): Promise<TypesResponse>{
        return {data: await this.customerRepository.find({ where: { type } }) };
    }
}