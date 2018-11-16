import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: '35.194.210.98',
            port: 3306,
            username: 'root',
            password: '29915815',
            database: 'globalId',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
];