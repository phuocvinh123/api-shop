import { BaseService } from "@shared";
import { Cart } from '@model';
import { CartRepository } from "../repository/cart.repository";
import { DataSource } from "typeorm";
import { ProductService, UserService } from '@service';


export class CartService extends BaseService <Cart>{
 constructor(
    public repo:CartRepository,
    private dataSource: DataSource,
    private userService: UserService,
    private productService: ProductService
 ){
    super(repo);
 }

 async saveCart(userId: string, productId: string): Promise<any> {
   const user = await this.userService.findOne(userId, []);
   const product = await this.productService.findOne(productId, []);
   console.log("product"+product);
   console.log('user'+user);
   if (product && user) {
     const cart = new Cart();
     cart.user = user;
     cart.product = product;
     return await this.repo.save(cart);
   } else {
     throw new Error('Product or user not found');
   }
 }
}