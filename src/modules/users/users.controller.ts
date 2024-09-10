import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';
import {ApiBearerAuth, ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {PublicUserResDto} from "./dto/res/public-user.res.dto";
import {PrivateUserResDto} from "./dto/res/private-user.res.dto";

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({type: PrivateUserResDto})
  @Post()
  public async create(@Body() createUserDto: CreateUserDto):Promise<any> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  public async findAll():Promise<any> {
    return this.usersService.findAll();
  }

  @Get(':userId')
  public async findOne(@Param('userId') userId: string):Promise<any> {
    return this.usersService.findOne(+userId);
  }

  @Patch(':userId')
  public async update(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto):Promise<any> {
    return this.usersService.update(+userId, updateUserDto);
  }

  @Delete(':userId')
  public async remove(@Param('userId') userId: string) {
    return this.usersService.remove(+userId);
  }

  @ApiBearerAuth()
  @ApiOkResponse({type: PrivateUserResDto })
  @Get('me')
  public async findMe():Promise<any> {
      return this.usersService.findMe(1);
    }
  @ApiBearerAuth()
    @ApiOkResponse({type: PrivateUserResDto })
    @Patch('me')
  public async updateMe( @Body() updateUserDto: UpdateUserDto):Promise<any> {
      return this.usersService.updateMe(1, updateUserDto);
    }

  @ApiBearerAuth()
    @ApiNoContentResponse({description: 'User has been removed'})
    @Delete('me')
  public async removeMe():Promise<any> {
      return this.usersService.removeMe(1);
    }
}
