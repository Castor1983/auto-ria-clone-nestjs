import { Column, Entity, OneToMany } from 'typeorm';

import { EAccountType } from '../enums/userEnums/accountType.enum';
import { EUserRole } from '../enums/userEnums/userRole.enum';
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

  @Column({ type: 'enum', enum: EAccountType, default: EAccountType.BASIC })
  accountType: EAccountType;
  @Column({ type: 'enum', enum: EUserRole, default: EUserRole.SELLER })
  role: EUserRole;

  @OneToMany(() => CarEntity, (entity) => entity.user)
  cars?: CarEntity[];

  @OneToMany(() => RefreshTokenEntity, (entity) => entity.user)
  refreshTokens?: RefreshTokenEntity[];
}
