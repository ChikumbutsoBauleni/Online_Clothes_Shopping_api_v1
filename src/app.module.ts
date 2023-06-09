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
      host: 'sql10.freesqldatabase.com',
      port:  3306,
      username: 'sql10624877',
      password: 'lW6ixvjJGZ',
      database: 'sql10624877',
      synchronize: false,
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



