export const IClientsProductsService = Symbol('IClientsProductsService');

export interface IClientsProductsService {
  getEnabledProducts(clientId: string): Promise<ProductDto[]>;
}
