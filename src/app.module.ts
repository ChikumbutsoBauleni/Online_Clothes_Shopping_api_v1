import { Module,} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './clothes/product.modules';
import { UsersModule } from './Users/user.modules';
import { AuthModule } from './auth/auth.module';
import { MiddlewareConsumer } from '@nestjs/common';
import { CurrentUserMiddleware } from './utility/middleware/current-user.middleware';
import { RequestMethod } from '@nestjs/common';


@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port:  3306,
      username: 'root',
      password: '',
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

 export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CurrentUserMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL   });
  }
 }



