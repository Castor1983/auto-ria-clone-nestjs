import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SkipAuth } from '../auth/decorators/skip-auth.decorator';
import { StatisticViewService } from './statisticView.service';

@ApiTags('StatisticView')
@Controller('statisticView')
export class StatisticViewController {
  constructor(private readonly statisticViewService: StatisticViewService) {}

  @SkipAuth()
  @Get(':carId')
  async getStatisticView(@Param('carId') carId: string) {
    return {
      dailyViews: await this.statisticViewService.getDailyViews(carId),
      weeklyViews: await this.statisticViewService.getWeeklyViews(carId),
      monthlyViews: await this.statisticViewService.getMonthlyViews(carId),
    };
  }
}
