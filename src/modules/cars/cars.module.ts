import { Module } from '@nestjs/common';

import { StatisticViewModule } from '../statisticView/statisticView.module';
import { CarsController } from './cars.controller';
import { BadWordsService } from './services/badWords.service';
import { CarsService } from './services/cars.service';

@Module({
  imports: [StatisticViewModule],
  controllers: [CarsController],
  providers: [CarsService, BadWordsService],
})
export class CarsModule {}
