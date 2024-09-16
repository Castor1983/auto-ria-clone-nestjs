import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotIn,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

import { TransformHelper } from '../../../../common/transform.helper';

export class BaseUserReqDto {
  @IsOptional()
  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 20)
  public readonly name?: string;

  @ApiProperty({ example: 'test@gmail.com' })
  @IsEmail()
  @Transform(TransformHelper.trim)
  public readonly email: string;

  @IsOptional()
  @IsString()
  @Transform(TransformHelper.trim)
  public readonly phone?: string;

  @ApiProperty({ example: '232ewdSd' })
  @IsNotIn(['password', 'qwe', '123'])
  @Transform(TransformHelper.trim)
  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'Incorrect password',
  })
  public readonly password: string;
}
