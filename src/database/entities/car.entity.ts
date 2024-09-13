import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { EBrand } from '../enums/carEnums/brand.enum';
import { ECarStatus } from '../enums/carEnums/carStatus.enum';
import { ECurrency } from '../enums/carEnums/currency.enum';
import { EUkrainianRegion } from '../enums/carEnums/UkrainianRegion.enum';
import { EYear } from '../enums/carEnums/year.enum';
import { CreateUpdateModel } from './models/create-update.model';
import { UserEntity } from './user.entity';

@Entity('cars')
export class CarEntity extends CreateUpdateModel {
  @Column({ type: 'enum', enum: EBrand })
  brand: EBrand;

  @Column('text')
  model: string;

  @Column({ type: 'enum', enum: EYear })
  year: EYear;

  @Column('text')
  specification: string;

  @Column('text')
  photo: string;

  @Column({ type: 'enum', enum: EUkrainianRegion })
  region: EUkrainianRegion;

  @Column('int')
  price: number;

  @Column({ type: 'enum', enum: ECurrency })
  currency: ECurrency;

  @Column({ type: 'enum', enum: ECarStatus, default: ECarStatus.inactive })
  status: ECarStatus;

  @Column()
  user_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.cars)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
