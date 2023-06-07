import { Module,} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './clothes/product.modules';
import { UsersModule } from './Users/user.modules';
import { AuthModule } from './auth/auth.module';


@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql8.freesqldatabase.com',
      port:  3306,
      username: 'sql8624376',
      password: 'F9N8Bc5NX3',
      database: 'online_clothes_shopping_api_v1',
      synchronize: true,
      autoLoadEntities: true,
      
    }),
    ProductModule,
    UsersModule,
    AuthModule
  ],

  controllers: [],
  providers: [],
})

 export class AppModule {}



