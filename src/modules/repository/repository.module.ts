import { Global, Module } from '@nestjs/common';

import { CarRepository } from './services/car.repository';
import { RefreshTokenRepository } from './services/refresh-token.repository';
import { StatisticViewRepository } from './services/statisticview.repository';
import { UserRepository } from './services/user.repository';

const repositories = [
  CarRepository,
  UserRepository,
  RefreshTokenRepository,
  StatisticViewRepository,
];

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: repositories,
  exports: repositories,
})
export class RepositoryModule {}
