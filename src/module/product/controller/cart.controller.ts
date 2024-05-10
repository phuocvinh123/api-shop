import { Headers } from "@shared";
import { CartService, ProductService, UserService } from "@service";
import { Body, Post } from "@nestjs/common";
import { AddToCartDto } from "../dto/cart.dto";


@Headers('cart')
export class CartController {
 constructor(
    private readonly Service: CartService,
    private readonly userService: UserService,
    private readonly productService: ProductService,
 ){}

 @Post("/addToCart")
 async addToCart(@Body() productId: AddToCartDto) {
      console.log(productId);
   
 }
}