import { Column, Entity } from 'typeorm';

import { CreateUpdateModel } from './models/create-update.model';

@Entity('currency_rates') // Назва таблиці в базі даних
export class CurrencyRateEntity extends CreateUpdateModel {
  @Column({ type: 'varchar', length: 3 })
  ccy: string;

  @Column({ type: 'decimal', precision: 10, scale: 5 })
  buy: number;

  @Column({ type: 'decimal', precision: 10, scale: 5 })
  sale: number;
}
