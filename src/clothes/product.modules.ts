import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.services";
import { Product } from "./product.entities";
import { MiddlewareConsumer, NestModule, RequestMethod } from "@nestjs/common";
import { AuthenticationMiddleware } from "./middlewares/authentication.middleware";


@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {

        //let middleware play globally using all endpoints
        consumer.apply(AuthenticationMiddleware).forRoutes('*');
    }
}
 