import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Id } from './id.entity';

@Injectable()
export class IdService {
    constructor(
        @Inject('IdRepositoryToken')
        private readonly idRepository: Repository<Id>,
    ) {
        setInterval(async () => {
            if (this.idPool.length < 100){
                this.idPool.push(await this.getId());
            }
        }, 100);
    }
    private idPool: number[]= [];
    async getId(){
        await this.idRepository.query('REPLACE INTO id(stub) values(1);');
        return (await this.idRepository.query('SELECT LAST_INSERT_ID() as id;'))[0].id;
    }
    async generate(){
        return this.idPool.length ? this.idPool.shift () : await this.getId();
    }
}