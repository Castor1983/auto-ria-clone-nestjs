import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, Length } from 'class-validator';

import { EBrand } from '../../../../database/enums/carEnums/brand.enum';
import { ECurrency } from '../../../../database/enums/carEnums/currency.enum';
import { EUkrainianRegion } from '../../../../database/enums/carEnums/UkrainianRegion.enum';
import { EYear } from '../../../../database/enums/carEnums/year.enum';

export class BaseCarReqDto {
  @ApiProperty({
    enum: EBrand,
    description: 'Car brand',
  })
  @IsNotEmpty()
  @IsEnum(EBrand)
  brand: EBrand;

  @ApiProperty({
    example: 'X5',
    description: 'Car model',
  })
  @IsNotEmpty()
  model: string;

  @ApiProperty({
    enum: EYear,
    description: 'Year',
  })
  @IsNotEmpty()
  @IsEnum(EYear)
  year: EYear;

  @ApiProperty({
    example: 'My car  is best of the best',
    description: ' Car description',
  })
  @IsNotEmpty()
  @Length(15, 100)
  description: string;

  @IsNotEmpty()
  photo: string;

  @ApiProperty({
    enum: EUkrainianRegion,
    description: 'region of Ukraine',
  })
  @IsEnum(EUkrainianRegion)
  region: EUkrainianRegion;

  @ApiProperty({
    example: 1983,
    description: 'Car price',
  })
  @ApiProperty({
    example: 1983,
    description: 'Car price',
  })
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    enum: ECurrency,
    description: 'Car price currency',
  })
  @IsEnum(ECurrency)
  currency: ECurrency;
}
