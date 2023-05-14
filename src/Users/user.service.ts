import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entities";
import { Logger } from "@nestjs/common";

@Injectable()
export class UserService{
    private readonly logger = new Logger(UserService.name);
    requestService: any;

    getUser(): string{
        const userId = this.requestService.getUserId();
        this.logger.log('getUser userId:', userId);
        return 'User!';
    }
    getUsersById(id: number): User | PromiseLike<User> {
        throw new Error("Method not implemented.");
    }
    findUserById(userD: User): User[] | PromiseLike<User[]> {
        throw new Error("Method not implemented.");
    }
    create(UserD: User): User[] | PromiseLike<User[]> {
        throw new Error("Method not implemented.");
    }
    
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>,
    ){}
        
    async createUser(UserD:User): Promise<User>{
        const user = this.userRepository.create(UserD);
        return this.userRepository.save(user);
    }

     async findAll(): Promise<User[]>{
        return await this.userRepository.find();
    }

    async getUserById(id: number): Promise<User>{
        return this.userRepository.findOne({where:{id}})
         }
 
    async updateUser(id: number, userD: User): Promise<User>{
        const user = await this.getUserById(id);
        this.userRepository.merge(user, userD);
        return this.userRepository.save(user);
       }

       async deleteUser(id: number): Promise<void>{
        const existingUser = await this.userRepository.delete(id);

        if(!existingUser) {
            throw new Error('User with id{id}not found');
            
        }
        await this.userRepository.delete(id);
    
       }
}