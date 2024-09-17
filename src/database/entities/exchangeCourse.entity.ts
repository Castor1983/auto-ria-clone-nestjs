import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { CreateUpdateModel } from './models/create-update.model';
import { UserEntity } from './user.entity';

@Entity('exchangeCourse')
export class ExchangeCourseEntity extends CreateUpdateModel {
  @Column('text')
  refreshToken: string;

  @Column('text')
  deviceId: string;

  @Column()
  user_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.refreshTokens, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
