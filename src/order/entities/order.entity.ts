import { OneToOne, PrimaryGeneratedColumn, Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from "src/Users/user.entities";
import { Product } from "src/clothes/product.entities";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @ManyToOne(() => Product, product => product.ordering)
  
    order: User[]
    
}