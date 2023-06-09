import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./product.entities";
import { Logger } from "@nestjs/common";

@Injectable()
export class ProductService{
    findUserById(userId: number) {
        throw new Error('Method not implemented.');
    }
    private readonly logger = new Logger(ProductService.name);
    requestService: any;

    getProduct(): string{
        const productId = this.requestService.getProductId();
        this.logger.log('getProduct productId:', productId);
        return 'Product!';
    }
    getProductsById(id: number): Product | PromiseLike<Product> {
        throw new Error("Method not implemented.");
    }
    findProductById(productD: Product): Product[] | PromiseLike<Product[]> {
        throw new Error("Method not implemented.");
    }
    create(productD: Product): Product[] | PromiseLike<Product[]> {
        throw new Error("Method not implemented.");
    }
    
    constructor(
        @InjectRepository(Product)
        private productRepository:Repository<Product>,
    ){}
        
    async createProduct(productD:Product): Promise<Product>{
        const product = this.productRepository.create(productD);
        return this.productRepository.save(product);
    }

     async findAll(): Promise<Product[]>{
        return await this.productRepository.find();
    }

    async getProductById(id: number): Promise<Product>{
        return this.productRepository.findOne({where:{id}})
        }
 
    async updateProduct(id: number, productD: Product): Promise<Product>{
        const product = await this.getProductById(id);
        this.productRepository.merge(product, productD);
        return this.productRepository.save(product);
       }

       async deleteProduct(id: number): Promise<void>{
        const existingProduct = await this.productRepository.delete(id);

        if(!existingProduct) {
            throw new Error('Product with id{id}not found');
            
        }
        await this.productRepository.delete(id);
    
       }
}
   

