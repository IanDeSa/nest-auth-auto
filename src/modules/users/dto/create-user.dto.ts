import { Permission } from '../enum/enum-permission';

export type CreateUserDto = {
  id?: string;
  username: string;
  password: string;
  permission: Permission[];
};
