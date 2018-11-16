import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { RegisterParam, RegisterResponse, GlobalId, GenerateParam, TypeSearch, TypesResponse } from './proto/id.interface';
import { Observable } from 'rxjs';
import { IdService } from 'id/id.service';
import { CustomerService } from './customer/customer.service';
@Controller()
export class AppController {
  constructor(private readonly IdService: IdService, private readonly CustomerService: CustomerService) { }

  @GrpcMethod('IdService')
  register(data: RegisterParam, metadata: any): Promise<RegisterResponse> {
    return this.CustomerService.add(data);
  }
  @GrpcMethod('IdService')
  info(data: GlobalId, metadata: any): RegisterResponse {
    return { name: 'test', description: '1', type: 1 };
  }
  @GrpcMethod('IdService')
  generate(data: GenerateParam, metadata: any): Promise<GlobalId> {
    return new Promise<GlobalId>((resolve, reject) => {
      (async () => {
        resolve({ id: await this.IdService.generate() });
      })();
    });
  }
  @GrpcMethod('IdService')
  types(data: TypeSearch, metadata: any): Promise<TypesResponse>{
    return this.CustomerService.find(data.name);
  }
}
