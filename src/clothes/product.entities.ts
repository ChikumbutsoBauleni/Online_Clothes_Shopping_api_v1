import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productType: string;

    @Column()
    price: number;

    @Column()
    description: string;
    ordering: any;
    available: any;
} 