import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from '../config/configuration';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module';
import { ExchangeCourseModule } from './exchangeCours/exchangeCourse.module';
import { PostgresModule } from './postgres/postgres.module';
import { RedisModule } from './redis/redis.module';
import { RepositoryModule } from './repository/repository.module';
import { StatisticViewModule } from './statisticView/statisticView.module';
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
    RepositoryModule,
    RedisModule,
    AuthModule,
    StatisticViewModule,
    ExchangeCourseModule,
  ],
})
export class AppModule {}
