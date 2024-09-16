import { EAccountType } from '../../../database/enums/userEnums/accountType.enum';
import { EUserRole } from '../../../database/enums/userEnums/userRole.enum';

export interface IUserData {
  userId: string;
  deviceId: string;
  email: string;
  accountType: EAccountType;
  role: EUserRole;
}
