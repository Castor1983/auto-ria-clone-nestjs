import { Global, Module } from '@nestjs/common';

import { CarRepository } from './services/car.repository';
import { CurrencyRateRepository } from './services/currencyRate.repository';
import { ExchangeCourseRepository } from './services/exchangeCourse.repository';
import { RefreshTokenRepository } from './services/refresh-token.repository';
import { StatisticViewRepository } from './services/statisticview.repository';
import { UserRepository } from './services/user.repository';

const repositories = [
  CarRepository,
  UserRepository,
  RefreshTokenRepository,
  StatisticViewRepository,
  ExchangeCourseRepository,
  CurrencyRateRepository,
];

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: repositories,
  exports: repositories,
})
export class RepositoryModule {}
