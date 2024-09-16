import { ConflictException, Injectable } from '@nestjs/common';

import { CarEntity } from '../../../database/entities/car.entity';
import { IUserData } from '../../auth/interfaces/user-data.interface';
import { CarRepository } from '../../repository/services/car.repository';
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
    const car = await this.carRepository.findOneBy({ id: carId });
    this.carRepository.merge(car, updateCarReqDto);
    return await this.carRepository.save(car);
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
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
}
