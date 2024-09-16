import { Injectable } from '@nestjs/common';

import { badWords } from '../BadWordsList';

@Injectable()
export class BadWordsService {
  public containsBadWords(content: string): boolean {
    if (!content) return false;

    for (const word of badWords) {
      if (content.toLowerCase().includes(word.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
  /* async getFailedAttempts(userId: number): Promise<number> {
    await return userAttempts.get(userId) || 0;
  }

  // Увеличение количества неудачных попыток
  async incrementFailedAttempts(userId: number): Promise<void> {
    const attempts = (await this.getFailedAttempts(userId)) + 1;
    userAttempts.set(userId, attempts);
  }*/
}
