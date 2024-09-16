import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { IUserData } from '../../auth/interfaces/user-data.interface';
import { CarsService } from '../services/cars.service';

@Injectable()
export class CarLimitGuard implements CanActivate {
  constructor(
    private readonly carService: CarsService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: IUserData = request.user;
    if (user.accountType === 'premium') {
      return true;
    }
    const carCount = await this.carService.getCarCountByUserId(user.userId);
    if (user.accountType === 'basic' && carCount >= 1) {
      throw new ForbiddenException('A basic account can only add one car.');
    }

    return true;
  }
}
