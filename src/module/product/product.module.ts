import { Module } from '@nestjs/common';

import { OrderController, ProductCategoryController, ProductController, ProductStoreController } from '@controller';
import {
  ProductCategoryService,
  ProductService,
  ProductStoreService,
  OrderService,
  OrderAddressService,
  OrderProductService,
  UserService,
  CartService,
} from '@service';
import {
  ProductCategoryRepository,
  ProductRepository,
  ProductStoreRepository,
  OrderRepository,
  UserRepository,
  OrderAddressRepository,
  OrderProductRepository,
  CartRepository,
} from '@repository';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [ProductController, ProductCategoryController, ProductStoreController, OrderController],
  providers: [
    ProductRepository,
    ProductService,
    ProductCategoryRepository,
    ProductCategoryService,
    ProductStoreService,
    ProductStoreRepository,
    OrderRepository,
    OrderService,
    OrderAddressRepository,
    OrderAddressService,
    OrderProductRepository,
    OrderProductService,
    UserService,
    UserRepository,
    CartService,
    CartRepository,
  ],
  exports: [
    ProductRepository,
    ProductService,
    ProductCategoryRepository,
    ProductCategoryService,
    ProductStoreService,
    ProductStoreRepository,
    OrderRepository,
    OrderService,
    OrderAddressRepository,
    OrderAddressService,
    OrderProductRepository,
    OrderProductService,
    CartService,
    CartRepository,
  ],
})
export class ProductModule {}
