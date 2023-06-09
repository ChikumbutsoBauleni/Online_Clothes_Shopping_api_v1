import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { OrderController } from './Order.controller';
import { ProductService } from 'src/clothes/product.services';
import { UserService } from 'src/Users/user.service';
import { Product } from 'src/clothes/product.entities';
import { User } from 'src/Users/user.entities';
import { Order } from './entities/order.entity';



@Module({
  imports: [TypeOrmModule.forFeature([
    Order,
    Product,
    User
  ])],
  controllers: [OrderController],
  providers: [
    ProductService,
    UserService,
    JwtService
  ],
})
export class OrderModule {}
