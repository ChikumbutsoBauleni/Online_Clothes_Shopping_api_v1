import { Controller,Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { Product } from "./product.entities";
import { ProductService } from "./product.services";

@Controller('products')
export class ProductController{
    constructor(private readonly productService:ProductService){}

    @Post()
    async createProduct(@Body() product: Product): Promise<Product>{
        return this.productService.createProduct(product);
    } 

    @Get()
    async getProduct(productD: Product): Promise<Product[]>{
        return this.productService.findProductById(productD);
   }
    @Get(':id')
    async getProductById(@Param('id') id: number): Promise<Product>{
        return this.productService.getProductById(id);
    }
  
     @Put(':id')
     async updateProduct(
        @Param('id') id: number, 
        @Param('productType') isProduct:string, 
        @Param('price') islegal:number,
        @Param('description') isMatching:string,
        @Body()productD:Product,
     ):Promise<Product>{
        return this.productService.updateProduct(id,productD);
     }
     @Delete(':id')
    async Delete(@Param('id')id: number): Promise<void>{
        return this.productService.deleteProduct(id);
     }


}