import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiNoContentResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';
import { PrivateUserResDto } from './dto/res/private-user.res.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<PrivateUserResDto> {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  public async findAll(): Promise<any> {
    return await this.usersService.findAll();
  }

  @Get(':userId')
  public async findOne(@Param('userId') userId: string): Promise<any> {
    return await this.usersService.findOne(+userId);
  }

  @Patch(':userId')
  public async update(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return await this.usersService.update(+userId, updateUserDto);
  }

  @Delete(':userId')
  public async remove(@Param('userId') userId: string) {
    return await this.usersService.remove(+userId);
  }

  @ApiBearerAuth()
  @Get('me')
  public async findMe(): Promise<PrivateUserResDto> {
    return await this.usersService.findMe(1);
  }
  @ApiBearerAuth()
  @Patch('me')
  public async updateMe(
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<PrivateUserResDto> {
    return await this.usersService.updateMe(1, updateUserDto);
  }

  @ApiBearerAuth()
  @ApiNoContentResponse({ description: 'User has been removed' })
  @Delete('me')
  public async removeMe(): Promise<void> {
    return await this.usersService.removeMe(1);
  }
}
