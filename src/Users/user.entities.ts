import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Users'})

export class User{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name: string;
    @Column()
    email:string;
    @Column()
    password:string;

}