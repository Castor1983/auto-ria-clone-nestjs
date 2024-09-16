import { ApiProperty } from '@nestjs/swagger';

import { EBrand } from '../../../../database/enums/carEnums/brand.enum';
import { ECarStatus } from '../../../../database/enums/carEnums/carStatus.enum';
import { ECurrency } from '../../../../database/enums/carEnums/currency.enum';
import { EUkrainianRegion } from '../../../../database/enums/carEnums/UkrainianRegion.enum';
import { EYear } from '../../../../database/enums/carEnums/year.enum';

export class CarResDto {
  @ApiProperty({
    example: '796cea24-a328-4463-a5e1-85a779e4780f',
    description: 'Car ID',
  })
  id: string;

  @ApiProperty({
    example: 'BMW',
    description: 'Car brand',
  })
  brand: EBrand;

  @ApiProperty({
    example: 'X5',
    description: 'Car model',
  })
  model: string;

  @ApiProperty({
    example: '1983',
    description: 'Year',
  })
  year: EYear;

  @ApiProperty({
    example: 'My car  is best of the best',
    description: ' Car description',
  })
  description: string;

  photo: string;

  @ApiProperty({
    example: 'Харківська область',
    description: 'region of Ukraine',
  })
  region: EUkrainianRegion;

  @ApiProperty({
    example: '1983',
    description: 'Car price',
  })
  price: number;

  @ApiProperty({
    example: 'UAH',
    description: 'Car price currency',
  })
  currency: ECurrency;

  @ApiProperty({
    example: 'active',
    description: 'Car status',
  })
  status: ECarStatus;

  @ApiProperty({
    example: '2021-09-29T10:00:00.000Z',
    description: 'Car Created Date',
  })
  created: Date;

  @ApiProperty({
    example: '2021-09-29T10:00:00.000Z',
    description: 'Car Updated Date',
  })
  updated: Date;
}
