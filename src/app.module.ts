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


  




@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port:  3306,
      username: 'root',
      password: '',
      database: 'online_clothes_shopping_api_v1',
      synchronize: false,
      logging:false,
      autoLoadEntities: true,
      
      
    }),
   
    ProductModule,
    UsersModule,
    AuthModule
  ],

  controllers: [],
  providers: [
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



