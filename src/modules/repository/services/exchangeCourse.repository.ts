import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ExchangeCourseEntity } from '../../../database/entities/exchangeCourse.entity';

@Injectable()
export class ExchangeCourseRepository extends Repository<ExchangeCourseEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ExchangeCourseEntity, dataSource.manager);
  }
}
