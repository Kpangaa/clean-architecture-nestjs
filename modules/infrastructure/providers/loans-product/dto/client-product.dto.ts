import { IsString, IsInt } from 'class-validator';

export class ClientProductDTO {

    @IsInt()
    productId: number;

    @IsString()
    clientId: string;

  }