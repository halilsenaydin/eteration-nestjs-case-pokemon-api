import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Pokemon API')
    .setDescription('Get information about pokemon!')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'jwt')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const swaggerOptions = {
    // swaggerOptions: {
    //   requestInterceptor: (request: any) => {
    //     request.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFsaWwgxLBicmFoaW0gxZ5FTkFZRElOIiwiaWF0IjoxNzIwNTMyODIxLCJleHAiOjE3MjA1MzY0MjF9.7i38JZyruem1Bss2CZAKcBah9p_eymoZ2Kxby9fiwrw';
    //     return request;
    //   },
    // },
  };
  SwaggerModule.setup('doc', app, document, swaggerOptions);

  await app.listen(3001);
}
bootstrap();
