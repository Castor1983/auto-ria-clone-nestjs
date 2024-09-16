import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { BadWordsService } from '../services/badWords.service';

@Injectable()
export class BadWordsGuard implements CanActivate {
  constructor(
    private readonly badWordService: BadWordsService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const description: string = request.body.description;

    const isBadWords = this.badWordService.containsBadWords(description);
    if (isBadWords) {
      throw new BadRequestException('The description contains bad words.');
    }

    return true;
  }
}
