import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { IUserData } from '../auth/interfaces/user-data.interface';
import { CarsListReqDto } from './dto/req/cars-list.req.dto';
import { CreateCarReqDto } from './dto/req/create-car.req.dto';
import { UpdateCarReqDto } from './dto/req/update-car.req.dto';
import { CarResDto } from './dto/res/car.res.dto';
import { CarLimitGuard } from './guards/carLimit.guard';
import { CarMapper } from './services/car.mapper';
import { CarsService } from './services/cars.service';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @UseGuards(CarLimitGuard)
  @Post()
  public async create(
    @CurrentUser() userData: IUserData,
    @Body() createCarReqDto: CreateCarReqDto,
  ): Promise<CarResDto> {
    const result = await this.carsService.create(userData, createCarReqDto);
    return CarMapper.toResponseDTO(result);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateCarReqDto: UpdateCarReqDto,
  ) {
    return this.carsService.update(+id, updateCarReqDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }

  @Get()
  public async findAll(@Query() query: CarsListReqDto) {
    return this.carsService.findAll(query);
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }
}
