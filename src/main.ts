import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { join } from 'path';
import { CustomerService } from 'customer/customer.service';
async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:5000',
      package: 'id',
      protoPath: join(__dirname, 'proto/id.proto'),
    },
  });
  app.listen(() => {

  });
}
bootstrap();
