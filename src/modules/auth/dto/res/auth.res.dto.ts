import { PublicUserResDto } from '../../../users/dto/res/public-user.res.dto';
import { TokenPairResDto } from './token-pair.res.dto';

export class AuthResDto {
  tokens: TokenPairResDto;
  user: PublicUserResDto;
}
