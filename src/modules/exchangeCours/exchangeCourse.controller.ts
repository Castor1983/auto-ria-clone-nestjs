import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { SkipAuth } from '../auth/decorators/skip-auth.decorator';
import { ExchangeCourseService } from './exchangeCourse.service';

@ApiTags('Currency')
@Controller('currency')
export class ExchangeCourseController {
  constructor(private readonly exchangeCourseService: ExchangeCourseService) {}
  @SkipAuth()
  @Get('rates')
  getCurrencyRates(): Observable<any> {
    return this.exchangeCourseService.getCurrencyRates();
  }
}
