import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';

import { AdminConfig, AppConfig } from './config/config.type';
import { EAccountType } from './database/enums/userEnums/accountType.enum';
import { EUserRole } from './database/enums/userEnums/userRole.enum';
import { AppModule } from './modules/app.module';
import { UserRepository } from './modules/repository/services/user.repository';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const appConfig = configService.get<AppConfig>('app');
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
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(appConfig.port, async () => {
    const userRepository = app.get<UserRepository>(UserRepository);
    const findSuperUser = await userRepository.findOneBy({
      role: EUserRole.ADMIN,
    });
    if (findSuperUser) {
      Logger.log('SuperAdmin found in the base');
    }
    if (!findSuperUser) {
      const config = configService.get<AdminConfig>('admin');
      const dto = {
        name: 'SuperAdmin',
        email: config.email,
        phone: config.phone,
        password: config.password,
        isVerified: true,
        role: EUserRole.ADMIN,
        accountType: EAccountType.PREMIUM,
      };
      const password = await bcrypt.hash(dto.password, 10);
      await userRepository.save(userRepository.create({ ...dto, password }));
      Logger.log('SuperAdmin save in the base successfully');
    }
    Logger.log(`Server running on http://${appConfig.host}:${appConfig.port}`);
    Logger.log(
      `Swagger running on http://${appConfig.host}:${appConfig.port}/docs`,
    );
  });
}
void bootstrap();
