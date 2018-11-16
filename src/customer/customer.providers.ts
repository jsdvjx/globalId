import { Connection, Repository } from 'typeorm';
import { Customer } from './customer.entity';

export const CustomerProviders = [
    {
        provide: 'CustomerRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Customer),
        inject: ['DbConnectionToken'],
    },
];