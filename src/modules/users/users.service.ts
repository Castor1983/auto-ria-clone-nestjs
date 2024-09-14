import { ConflictException, Injectable } from '@nestjs/common';

import { UserEntity } from '../../database/entities/user.entity';
import { IUserData } from '../auth/interfaces/user-data.interface';
import { UserRepository } from '../repository/services/user.repository';
import { UpdateUserDto } from './dto/req/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}
  public async findAll(): Promise<any> {
    return `This action returns all users`;
  }

  public async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return `This action updates a #${id}, ${updateUserDto} user`;
  }

  public async remove(id: number): Promise<any> {
    return `This action removes a #${id} user`;
  }
  public async findMe(userData: IUserData): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ id: userData.userId });
  }

  public async updateMe(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return `This action updates a #${id}, #${updateUserDto} user`;
  }

  public async removeMe(id: number): Promise<any> {
    return `This action removes a #${id} user`;
  }
  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }
  public async isEmailExistOrThrow(email: string): Promise<void> {
    const user = await this.userRepository.findOneBy({ email });
    if (user) {
      throw new ConflictException('Email already exists');
    }
  }
}
