import { Injectable } from '@nestjs/common';
import { ClientProductDTO } from './dto/client-product.dto';

@Injectable()
export class LoansProductService {
  constructor(
    @((InjectHttpClient as any)(HTTP_CLIENT_LOANS_PRODUCT))
    private loansProductService: HttpClient
  ) {}
  
  getProductByClient(data: ClientProductDTO): Promise<any> {
    const requestUrl = `/v1/client/${data.clientId}/product/${data.productId}`;
    // Logger.log(`[LOANS-PRODUCT-SERVICE GET] ${requestUrl}`, params);
    try {
      const response = await this.loansProductService.get(requestUrl, {
        params,
      });
      const responseData = response.data;
    } catch (error: any) {
      // Logger.error('Error getProductDetailByClient', error.response);
    }
  }
}
