import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // Import the DocumentBuilder class

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // setup nest swagger
  const options = new DocumentBuilder()
    .setTitle('Temporal NestJS Example API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
