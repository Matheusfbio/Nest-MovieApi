import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { serverConfig } from './commom/config/server.confg';
import { AppModule } from './app.module';
import { Swagger } from './commom/docs/swagger';

async function bootstrap() {
  const appServerConfig = serverConfig();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Register swagger for development
  await Swagger(app, appServerConfig.environment);

  await app.listen(3000);
}
bootstrap();
