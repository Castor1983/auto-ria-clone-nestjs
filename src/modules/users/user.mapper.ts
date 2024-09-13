import { UserEntity } from '../../database/entities/user.entity';
import { BaseUserResDto } from './dto/res/base-user.res.dto';

export class UserMapper {
  public static toResponseDTO(data: UserEntity): BaseUserResDto {
    return { ...data };
  }

  public static toIUserData(user: UserEntity, payload: any): any {
    return {
      userId: payload.userId,
      deviceId: payload.deviceId,
      email: user.email,
    };
  }
}
