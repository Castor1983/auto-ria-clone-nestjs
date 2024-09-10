import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/req/create-car.dto';
import { UpdateCarDto } from './dto/req/update-car.dto';
import {ApiTags} from "@nestjs/swagger";
import {CarsListReqDto} from "./dto/req/cars-list.req.dto";

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  findAll(@Query() query: CarsListReqDto) {
    return this.carsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
