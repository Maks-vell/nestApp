import * as process from 'node:process';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function start(){
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Первый проект')
    .setDescription('Документация по REST')
    .setVersion('1.0.0')
    .addTag('Documentation Starter')
    .build();

  const document  = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);


  await app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`);
  });
}

start()