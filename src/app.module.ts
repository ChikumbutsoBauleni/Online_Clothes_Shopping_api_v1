import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './clothes/product.modules';
import { ProductController } from './clothes/product.controller';
import { ProductService } from './clothes/product.services';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port:  3306,
      username: 'root',
      password: '',
      database: 'online_clothes_shopping_api_v1',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
  ],

  controllers: [],
  providers: [],
})

export class AppModule {}
