import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Logger } from "@nestjs/common";

import { Repository } from "typeorm";
import { Category } from "./category.entities";
 
@Injectable()
export class CategoryService{
    [x: string]: any;
    findOne(arg0: number) {
        throw new Error('Method not implemented.');
    }
    
    
    private readonly logger = new Logger(CategoryService.name);
    requestService: any;

    getUser(): string{
        const categoryId = this.requestService.getCategoryId();
        this.logger.log('getCategory categoryId:', categoryId);
        return 'Category!';
    }
    // getUsersById(id: number): Category | PromiseLike<Category> {
    //     throw new Error("Method not implemented.");
    // }
    // findUserById(userD:Category): Category[] | PromiseLike<Category[]> {
    //     throw new Error("Method not implemented.");
    // }
    
    // create(UserD: Category): Category[] | PromiseLike<Category[]> {
    //     throw new Error("Method not implemented.");
    // } 
    constructor(
        @InjectRepository(Category)
        private Reprository:Repository<Category>,
    ){}
        
    async createCategory(CategoryD:Category): Promise<Category>{
        const category = this.categoryRepository.create(CategoryD);
        return this.categoryRepository.save(category);

       
    }

     async findAll(): Promise<Category>{
        return await this.categoryRepository.find();
    }

    async getCategoryById(id: number): Promise<Category>{
        return this.categoryRepository.findOne({where:{id}})
         }
 
    async updateCategory(id: number, categoryD: Category): Promise<Category>{
        const category = await this.getCategoryById(id);
        this.categoryRepository.merge(category, categoryD);
        return this.categoryRepository.save(category);
       }

       async deleteCategory(id: number): Promise<void>{
        const existingCategory = await this.categoryRepository.delete(id);

        if(!existingCategory) {
            throw new Error('Category with id{id}not found');
            
        }
        await this.categoryRepository.delete(id);
    
       }
}