import { UserEntity } from '../../database/entities/user.entity';
import { IJwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { IUserData } from '../auth/interfaces/user-data.interface';
import { BaseUserResDto } from './dto/res/base-user.res.dto';

export class UserMapper {
  public static toResponseDTO(data: UserEntity): BaseUserResDto {
    return { ...data };
  }

  public static toIUserData(user: UserEntity, payload: IJwtPayload): IUserData {
    return {
      userId: payload.userId,
      deviceId: payload.deviceId,
      email: user.email,
    };
  }
}
