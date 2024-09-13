import { Column, Entity, OneToMany } from 'typeorm';

import { CarEntity } from './car.entity';
import { CreateUpdateModel } from './models/create-update.model';
import { RefreshTokenEntity } from './refresh-token.entity';

@Entity('users')
export class UserEntity extends CreateUpdateModel {
  @Column('text')
  name: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text', { select: false })
  password: string;

  @Column('text', { nullable: true })
  phone: string;

  @Column('boolean', { default: false })
  isVerified: boolean;

  @OneToMany(() => CarEntity, (entity) => entity.user)
  cars?: CarEntity[];

  @OneToMany(() => RefreshTokenEntity, (entity) => entity.user)
  refreshTokens?: RefreshTokenEntity[];
}
