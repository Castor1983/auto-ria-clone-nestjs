import { PartialType } from '@nestjs/mapped-types';

import { CreateCarReqDto } from './create-car.req.dto';

export class UpdateCarReqDto extends PartialType(CreateCarReqDto) {}
