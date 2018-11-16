import { Connection, Repository } from 'typeorm';
import { Id } from './id.entity';

export const idProviders = [
    {
        provide: 'IdRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Id),
        inject: ['DbConnectionToken'],
    },
];