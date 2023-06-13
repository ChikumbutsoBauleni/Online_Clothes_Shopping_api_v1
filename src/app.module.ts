import { MiddlewareConsumer, Module, NestModule, Scope,} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './clothes/product.modules';
import { UsersModule } from './Users/user.modules';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guards';
import { RequestService } from './request.service';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { LoggingInterceptor } from './interceptors/logging.interceptors';
import { CategoryModule } from './category/category.module';
import { User } from './Users/user.entities';
import { Category } from './category/category.entities';
import { Product } from './clothes/product.entities';
import { ConfigurationModule } from 'config/config.module';
import { DatabaseModule } from 'config/database.module';


@Module({
  imports:[
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host:'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password:'',
    //   database:'clothes',
    //   synchronize:true,
    //   logging:false,
    //   autoLoadEntities: true,

    // }),
   
    ConfigurationModule,
   DatabaseModule,

    ProductModule,
    UsersModule,
    AuthModule,
    CategoryModule
  ],

  controllers: [],
  providers: [
    User,
    Category,
    Product,

    RequestService,
    {
      provide:APP_INTERCEPTOR,
      scope:Scope.REQUEST,
      useClass:LoggingInterceptor,

    },
    {
      provide: APP_GUARD,
      useClass:AuthGuard,
    }],
})

 export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthenticationMiddleware)
      .forRoutes('*')
  }
 }



