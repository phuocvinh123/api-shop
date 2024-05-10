import { Base } from '@shared';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Product, User } from '@model';

@Entity({ schema: 'product' } )
export class Cart extends Base {

  @OneToOne(() => User, (user) => user.cart)
  @JoinColumn()
  user?: User;

  @ManyToOne(() => Product, (product) => product.cart)
  product?: Product;

  @Column()
  quantity?: number;
}