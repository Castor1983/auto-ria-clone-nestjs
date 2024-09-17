import { Injectable } from '@nestjs/common';
import { Between } from 'typeorm';

import { StatisticViewEntity } from '../../database/entities/staticticView.entity';
import { StatisticViewRepository } from '../repository/services/statisticview.repository';

@Injectable()
export class StatisticViewService {
  constructor(
    private readonly statisticViewRepository: StatisticViewRepository,
  ) {}
  async getDailyViews(carId: string): Promise<number> {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    return await this.statisticViewRepository.count({
      where: {
        carId,
        viewedAt: Between(yesterday, today),
      },
    });
  }
  async getWeeklyViews(carId: string): Promise<number> {
    const today = new Date();
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);

    return await this.statisticViewRepository.count({
      where: {
        carId,
        viewedAt: Between(lastWeek, today),
      },
    });
  }
  async getMonthlyViews(carId: string): Promise<number> {
    const today = new Date();
    const lastMonth = new Date(today);
    lastMonth.setMonth(today.getMonth() - 1);

    return await this.statisticViewRepository.count({
      where: {
        carId,
        viewedAt: Between(lastMonth, today),
      },
    });
  }
  public async addView(carId: string): Promise<StatisticViewEntity> {
    return await this.statisticViewRepository.save(
      this.statisticViewRepository.create({
        carId,
      }),
    );
  }
}
