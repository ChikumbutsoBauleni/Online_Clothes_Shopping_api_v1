import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity()
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    description:string;

    //@CreateDateColumn()
   // createdAt:Timestamp;
    //@UpdateDateColumn()
    //updatedAt:Timestamp;
}