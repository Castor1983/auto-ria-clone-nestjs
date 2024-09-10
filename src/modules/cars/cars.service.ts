import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/req/create-car.dto';
import { UpdateCarDto } from './dto/req/update-car.dto';
import {CarsListReqDto} from "./dto/req/cars-list.req.dto";

@Injectable()
export class CarsService {
  create(createCarDto: CreateCarDto) {
    return 'This action adds a new car';
  }

  findAll(query: CarsListReqDto) {
    return `This action returns all cars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
