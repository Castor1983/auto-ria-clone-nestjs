import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { isUUID } from 'class-validator';

import { CarEntity } from '../../../database/entities/car.entity';
import { IUserData } from '../../auth/interfaces/user-data.interface';
import { CarRepository } from '../../repository/services/car.repository';
import { badWords } from '../BadWordsList';
import { CreateCarReqDto } from '../dto/req/create-car.req.dto';
import { UpdateCarReqDto } from '../dto/req/update-car.req.dto';

@Injectable()
export class CarsService {
  constructor(private readonly carRepository: CarRepository) {}

  public async create(
    userData: IUserData,
    dto: CreateCarReqDto,
  ): Promise<CarEntity> {
    const carNotExist = await this.createCar(dto, userData);
    if (carNotExist) {
      return await this.carRepository.save(
        this.carRepository.create({
          ...dto,
          user_id: userData.userId,
        }),
      );
    }
  }

  public async updateMyCar(
    carId: string,
    updateCarReqDto: UpdateCarReqDto,
  ): Promise<CarEntity> {
    if (!isUUID(carId)) {
      throw new BadRequestException('Car id must be uuid type');
    }
    const car = await this.carRepository.findOneBy({ id: carId });
    if (!car) {
      throw new NotFoundException('Car not found');
    }
    this.carRepository.merge(car, updateCarReqDto);
    return await this.carRepository.save(car);
  }

  public async removeMyCar(carId: string): Promise<void> {
    if (!isUUID(carId)) {
      throw new BadRequestException('Car id must be uuid type');
    }
    const car = await this.carRepository.findOneBy({ id: carId });
    if (!car) {
      throw new NotFoundException('Car not found');
    }
    await this.carRepository.delete({ id: carId });
  }

  /* findAll(query: CarsListReqDto) {
    return `This action returns all cars ${CarsListReqDto}`;
  }*/

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  private async createCar(
    dto: CreateCarReqDto,
    userData: IUserData,
  ): Promise<boolean> {
    const { brand, model, year } = dto;
    const existingCar = await this.carRepository.findOne({
      where: { brand, model, year, user: { id: userData.userId } },
    });
    if (existingCar) {
      throw new ConflictException('This car has already been added');
    }
    return true;
  }
  public async getCarCountByUserId(userId: string): Promise<number> {
    return await this.carRepository.count({
      where: { user_id: userId },
    });
  }
  public containsBadWords(content: string): boolean {
    if (!content) return false;

    for (const word of badWords) {
      if (content.toLowerCase().includes(word.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
}
