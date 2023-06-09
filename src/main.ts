import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


    const config = new DocumentBuilder()
      .setTitle('ONLINE CLOTHES SHOPPING API')
      .setDescription('The online shopping platform')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app,document);


  
  await app.listen(3335);
}
bootstrap();
