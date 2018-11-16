import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdService } from 'id/id.service';
import { idProviders } from 'id/id.providers';
import { DatabaseModule } from './database/database.module';
import { CustomerProviders } from './customer/customer.providers';
import { CustomerService } from './customer/customer.service';
@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ...idProviders, IdService, ...CustomerProviders, CustomerService],
})
export class AppModule {}
