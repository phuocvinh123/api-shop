import { IsString } from 'class-validator';

export class AddToCartDto {
  @IsString()
  readonly productId: string;
}