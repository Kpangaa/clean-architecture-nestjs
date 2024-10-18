import { IClientsProductsService } from '../../domain/services/client-products.service.inteface';

export class ClientProductsServiceImpl implements IClientsProductsService {
    async getEnabledProducts(clientId: string): Promise<ProductDto[]>{
        return [];
    };
}
