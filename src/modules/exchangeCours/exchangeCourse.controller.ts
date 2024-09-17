import { Controller, Get } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ApiTags } from '@nestjs/swagger';

import { SkipAuth } from '../auth/decorators/skip-auth.decorator';
import { ExchangeCourseService } from './exchangeCourse.service';

@ApiTags('Currency')
@Controller('currency')
export class ExchangeCourseController {
  constructor(private readonly exchangeCourseService: ExchangeCourseService) {}
  @SkipAuth()
  @Get('rates')
  @Cron(CronExpression.EVERY_DAY_AT_7AM)
  async getCurrencyRatesAndSave() {
    await this.exchangeCourseService.getCurrencyRatesAndSave();
  }
}
