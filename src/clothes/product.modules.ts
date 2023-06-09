import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.services";
import { Product } from "./product.entities";
import { MiddlewareConsumer, NestModule, RequestMethod } from "@nestjs/common";



@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}
 