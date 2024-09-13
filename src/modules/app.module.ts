import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from '../config/configuration';
import { CarsModule } from './cars/cars.module';
import { PostgresModule } from './postgres/postgres.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    PostgresModule,
    UsersModule,
    CarsModule,
  ],
})
export class AppModule {}
