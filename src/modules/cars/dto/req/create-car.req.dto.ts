import { PickType } from '@nestjs/swagger';

import { BaseCarReqDto } from './base-car.req.dto';

export class CreateCarReqDto extends PickType(BaseCarReqDto, [
  'model',
  'brand',
  'year',
  'region',
  'description',
  'price',
  'currency',
  'photo',
]) {}
