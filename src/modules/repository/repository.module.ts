import { Global, Module } from '@nestjs/common';

import { CarRepository } from './services/car.repository';
import { UserRepository } from './services/user.repository';

const repositories = [CarRepository, UserRepository];

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: repositories,
  exports: repositories,
})
export class RepositoryModule {}
