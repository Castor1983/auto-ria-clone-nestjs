import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ExchangeCourseService {
  private readonly API_URL =
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  constructor(private readonly httpService: HttpService) {}

  getCurrencyRates(): Observable<any> {
    return this.httpService.get(this.API_URL).pipe(
      map((response: AxiosResponse) => response.data),
      catchError(() => {
        throw new HttpException(
          'Не вдалося отримати дані від ПриватБанку',
          HttpStatus.BAD_GATEWAY,
        );
      }),
    );
  }
}
