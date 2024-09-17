import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('statisticView')
export class StatisticViewEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  carId: string;

  @CreateDateColumn()
  viewedAt: Date;
}
