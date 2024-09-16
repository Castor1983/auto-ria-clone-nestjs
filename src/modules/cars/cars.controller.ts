import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { IUserData } from '../auth/interfaces/user-data.interface';
import { CreateCarReqDto } from './dto/req/create-car.req.dto';
import { UpdateCarReqDto } from './dto/req/update-car.req.dto';
import { CarResDto } from './dto/res/car.res.dto';
import { BadWordsGuard } from './guards/badWords.guard';
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
  @UseGuards(BadWordsGuard)
  @Post()
  public async create(
    @CurrentUser() userData: IUserData,
    @Body() createCarReqDto: CreateCarReqDto,
  ): Promise<CarResDto> {
    const result = await this.carsService.create(userData, createCarReqDto);
    return CarMapper.toResponseDTO(result);
  }

  @UseGuards(BadWordsGuard)
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Patch(':carId')
  public async updateMyCar(
    @Param('carId') carId: string,
    @Body() updateCarReqDto: UpdateCarReqDto,
  ): Promise<CarResDto> {
    const updatedCar = await this.carsService.updateMyCar(
      carId,
      updateCarReqDto,
    );
    return CarMapper.toResponseDTO(updatedCar);
  }

  @ApiBearerAuth()
  @ApiNoContentResponse({ description: 'Car has been removed' })
  @Delete(':carId')
  public async removeMyCar(@Param('carId') carId: string): Promise<void> {
    return await this.carsService.removeMyCar(carId);
  }

  /*@Get()
  public async findAll(@Query() query: CarsListReqDto) {
    return this.carsService.findAll(query);
  }*/

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }
}
