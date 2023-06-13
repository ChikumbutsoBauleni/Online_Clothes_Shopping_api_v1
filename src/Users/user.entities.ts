import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import *as bcrypt from "bcrypt";

@Entity()

export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column({
        unique:true,
    })
    email:string;

    @Column()
    password:string;

    //@CreateDateColumn()
    //createdAt:Date

    //@UpdateDateColumn()
    //updatedAt:Date

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password,8);
    }

    async validatePassword(password: string):Promise<boolean>{
        return bcrypt.compare(password, this.password);
    }


}