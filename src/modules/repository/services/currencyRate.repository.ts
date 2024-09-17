import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { CurrencyRateEntity } from '../../../database/entities/currencyRate.entity';

@Injectable()
export class CurrencyRateRepository extends Repository<CurrencyRateEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(CurrencyRateEntity, dataSource.manager);
  }
}
