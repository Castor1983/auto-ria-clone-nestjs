import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './modules/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('AutoRiaClone')
        .setDescription('The API description')
        .setVersion('1.0.0')
        .addBearerAuth({
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            in: 'header',
        })
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
            docExpansion: 'list',
            defaultModelsExpandDepth: 7,
            persistAuthorization: true,
        },
    });
    const port = 3000;
    const host = 'localhost';
    await app.listen(port, () => {
        Logger.log(`Server running on http://${host}:${port}`);
        Logger.log(`Swagger running on http://${host}:${port}/docs`);
    });
}
void bootstrap();
