import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { ExchangeCourseController } from './exchangeCourse.controller';
import { ExchangeCourseService } from './exchangeCourse.service';

@Module({
  imports: [HttpModule], // Імпортуємо HttpModule для роботи з HttpService
  providers: [ExchangeCourseService],
  controllers: [ExchangeCourseController],
})
export class ExchangeCourseModule {}
