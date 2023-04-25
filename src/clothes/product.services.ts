import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Repository } from "typeorm";
import { Product } from "./product.entities";

@Injectable()
export class ProductService{
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

    // async findAll(): Promise<Product[]>{
    //     return await this.productRepository.find();
    // }

    async getProductById(id: number): Promise<Product>{
        return this.productRepository.findOne({where:{id}})
        }

    //     const product = await this.productRepository.findOne(options);
    //     return await product;
    // }
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

    //     const productToUpdate = await this.productRepository.findOne(options);

    //     //check errors
    //     if(!productToUpdate){
    //         throw new Error('product with id ${id} is not available');
        
    //     }

    //     //updating the changes

    //     productToUpdate.productType = updateProduct.productType;
    //     productToUpdate.price = updateProduct.price;
    //     productToUpdate.description = updateProduct.description;
    //     const saveProduct = await this.productRepository.save(productToUpdate);

    //     return await saveProduct;
    // }

    // async delete(id: number): Promise<void>{
    //     await this.productRepository.delete(id);
    // }

}