import { Global, Module,} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './clothes/product.modules';
import { UsersModule } from './Users/user.modules';
import { AuthModule } from './auth/auth.module';


@Global()
@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql10.freesqldatabase.com',
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
  providers: [],
})

 export class AppModule {}



