import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export async function Swagger(app: INestApplication, environment: string) {
  if (environment !== 'development') {
    return;
  }

  const docOptions = new DocumentBuilder()
    .setTitle('NEST_API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const documentApi = SwaggerModule.createDocument(app, docOptions);
  SwaggerModule.setup('api', app, documentApi);
}
