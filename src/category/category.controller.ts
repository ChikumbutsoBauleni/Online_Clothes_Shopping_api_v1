import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { Category } from './category.entities';


@ApiTags('USERS/ Controlling categories of products')
@Controller('Categories')
export class CategoryController{

    constructor(private readonly categoryService:CategoryService){}

    @Post()
    async createCategory(@Body() category:Category): Promise<Category>{
        return this.categoryService.createCategory(category);
    } 
    
    @Get()
    async findAll(): Promise<Category>{
        return await this.categoryService.findAll();
   }
    @Get(':id')
    async getCategoryById(@Param('id') id: number): Promise<Category>{
        return this.categoryService.getCategoryById(id);
    }
  
     @Put(':id')
     async updateCategory(
        @Param('id') id: number, 
        @Param('title') islegal:string, 
        @Param('description') isUnique:number,
        @Body()categoryD:Category,
     ):Promise<Category>{
        return this.categoryService.updateCategory(id,categoryD);
     }
     @Delete(':id')
    async Delete(@Param('id')id: number): Promise<void>{
        return this.categoryService.deleteCategory(id);
     }


}

