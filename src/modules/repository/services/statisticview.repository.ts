import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { StatisticViewEntity } from '../../../database/entities/staticticView.entity';

@Injectable()
export class StatisticViewRepository extends Repository<StatisticViewEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(StatisticViewEntity, dataSource.manager);
  }
}
