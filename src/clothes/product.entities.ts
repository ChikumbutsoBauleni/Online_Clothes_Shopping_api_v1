import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'clothes'})
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productType: string;

    @Column()
    price: number;

    @Column()
    description: string;
} 