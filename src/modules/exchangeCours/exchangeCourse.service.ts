import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

import { CurrencyRateRepository } from '../repository/services/currencyRate.repository';

@Injectable()
export class ExchangeCourseService {
  private privatbankApiUrl =
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  constructor(
    private readonly httpService: HttpService,
    private readonly currencyRateRepository: CurrencyRateRepository,
  ) {}

  async getCurrencyRatesAndSave(): Promise<void> {
    try {
      const response = await lastValueFrom(
        this.httpService.get(this.privatbankApiUrl),
      );
      const rates = response.data;
      for (const rate of rates) {
        // Перевіряємо, чи існує запис для цієї валюти (ccy — це код валюти, наприклад, USD)
        const existingRate = await this.currencyRateRepository.findOne({
          where: { ccy: rate.ccy },
        });

        if (existingRate) {
          // Якщо запис існує, оновлюємо його
          existingRate.buy = rate.buy;
          existingRate.sale = rate.sale;

          await this.currencyRateRepository.save(existingRate); // Оновлюємо запис у базі
        } else {
          // Якщо запису немає, створюємо новий
          const newRate = this.currencyRateRepository.create({
            ccy: rate.ccy,
            buy: rate.buy,
            sale: rate.sale,
          });

          await this.currencyRateRepository.save(newRate); // Створюємо новий запис
        }
      }
    } catch (error) {
      Logger.error('Помилка при оновленні курсу валют:', error);
    }
  }
}
