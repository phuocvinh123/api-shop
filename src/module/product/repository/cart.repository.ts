import { Injectable } from "@nestjs/common";
import { Cart } from "../model/cart.model";
import { DataSource } from "typeorm";
import { BaseRepository } from "@shared";

@Injectable()
export class CartRepository extends BaseRepository<Cart> {
  constructor(private readonly dataSource: DataSource) {
    super(Cart, dataSource.createEntityManager());
  }
}