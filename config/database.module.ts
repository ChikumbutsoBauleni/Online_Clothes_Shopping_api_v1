import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './database.config';
import { ConfigurationModule } from './config.module';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/Users/user.entities';
import { Category } from 'src/category/category.entities';
import { Product } from 'src/clothes/product.entities';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigurationModule],
            inject: [DatabaseConfigService],
            useFactory: (configService: DatabaseConfigService) => ({
                type: 'mysql',
                host: configService.getHost(),
                port: configService.getPort(),
                username: configService.getUserName(),
                password: configService.getPassword(),
                database: configService.getDatabaseName(),
                entities: [User, Category, Product],
                synchronize: true,
            }),
        }),
    ],
    providers: [DatabaseConfigService, ConfigService],
})
export class DatabaseModule{}