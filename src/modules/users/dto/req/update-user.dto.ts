import { PickType } from '@nestjs/swagger';

import { BaseUserReqDto } from './base-user.req.dto';

export class UpdateUserDto extends PickType(BaseUserReqDto, [
  'name',
  'phone',
]) {}
