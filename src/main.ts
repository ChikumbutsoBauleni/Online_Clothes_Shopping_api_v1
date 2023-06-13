import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AuthGuard } from './guards/auth.guards';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule, {abortOnError: false});
  const configService = app.get(ConfigService);
  app.useGlobalGuards(new AuthGuard);
     

    const config = new DocumentBuilder()
      .setTitle('ONLINE CLOTHES SHOPPING API')
      .setDescription('The online shopping platform')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app,document);
    

  await app.listen(8080);
}
bootstrap();
