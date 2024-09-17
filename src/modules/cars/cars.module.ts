import { Module } from '@nestjs/common';

import { CarsController } from './cars.controller';
import { BadWordsService } from './services/badWords.service';
import { CarsService } from './services/cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService, BadWordsService],
})
export class CarsModule {}
