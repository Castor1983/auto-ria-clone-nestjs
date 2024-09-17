import { Module } from '@nestjs/common';

import { StatisticViewController } from './statisticView.controller';
import { StatisticViewService } from './statisticView.service';

@Module({
  controllers: [StatisticViewController],
  providers: [StatisticViewService],
  exports: [StatisticViewService],
})
export class StatisticViewModule {}
