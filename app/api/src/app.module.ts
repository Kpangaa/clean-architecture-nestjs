import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IClientsProductsService } from '../../../modules/domain/services/client-products.service.inteface'
import { ClientProductsServiceImpl } from '../../../modules/infrastructure/providers/client-products.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    { provide: IClientsProductsService, useClass: ClientProductsServiceImpl },
    { provide: IClientsProductsService, useClass: ClientProductsServiceImpl },
    { provide: IClientsProductsService, useClass: ClientProductsServiceImpl },
    AppService
  ],
})
export class AppModule {}
